/**
 * CDP screenshot script — login via API (curl), set cookie + localStorage, reload
 */
const CDP = require('chrome-remote-interface')
const fs = require('fs')
const https = require('https')

const PROD_URL = 'https://ausu.ssm.com.ng'
const LOGIN_EMAIL = 'demo.admin@hostelease.test'
const LOGIN_PASSWORD = 'DemoAdmin123!'

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

// Helper: make HTTPS request
function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ''
      const setCookie = res.headers['set-cookie']
      res.on('data', d => data += d)
      res.on('end', () => resolve({ status: res.statusCode, body: data, setCookie }))
    })
    req.on('error', reject)
    if (body) req.write(body)
    req.end()
  })
}

async function main() {
  const client = await CDP()
  const { Page, Runtime, Network } = client
  await Promise.all([Page.enable(), Runtime.enable(), Network.enable()])

  // Step 1: Login via API (server-side, curl-style) to get token + user
  console.log('→ Logging in via API...')
  const loginResp = await httpsRequest({
    hostname: 'ausu.ssm.com.ng',
    path: '/api/auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/152.0.0.0 Safari/537.36' },
  }, JSON.stringify({ email: LOGIN_EMAIL, password: LOGIN_PASSWORD }))

  let loginData = JSON.parse(loginResp.body)
  console.log('  Login response keys:', Object.keys(loginData).join(', '))

  if (loginData.needsDeviceVerification) {
    console.log('  ✗ Still needs device verification — cannot proceed')
    await client.close()
    return
  }

  const token = loginData.token
  const user = loginData.user
  console.log('  ✓ Got token for:', user.email, '|', user.role)

  // Step 2: Set the hostel-session cookie
  await Network.setCookie({
    name: 'hostel-session',
    value: token,
    domain: 'ausu.ssm.com.ng',
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
  })
  console.log('  ✓ Cookie set')

  // Step 3: Navigate to the app
  await Page.navigate({ url: PROD_URL })
  await Page.loadEventFired()
  await delay(3000)

  // Step 4: Inject session into localStorage (Zustand persist)
  await Runtime.evaluate({
    expression: `
      try {
        localStorage.setItem('hostel-ease-auth', JSON.stringify({
          user: ${JSON.stringify(user)},
          token: '${token}',
          requiresPasswordChange: false,
        }));
      } catch(e) {}
    `,
  })
  console.log('  ✓ Session injected into localStorage')

  // Step 5: Reload — SPA should now read cookie + localStorage + render dashboard
  await Page.reload()
  await Page.loadEventFired()
  await delay(10000)

  // Step 6: Check what's on the page
  const bodyText = await Runtime.evaluate({ expression: 'document.body.innerText.slice(0, 400)' })
  console.log('  Body:', bodyText.result.value?.slice(0, 200))

  // Step 7: Take admin dashboard screenshot
  const ss1 = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  fs.writeFileSync('/home/z/hostelease-landing/public/dashboard-admin.png', Buffer.from(ss1.data, 'base64'))
  console.log('✓ dashboard-admin.png saved')

  // Step 8: Navigate to /rooms
  await Page.navigate({ url: PROD_URL + '/rooms' })
  await Page.loadEventFired()
  await delay(5000)
  const ss2 = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  fs.writeFileSync('/home/z/hostelease-landing/public/bed-picker.png', Buffer.from(ss2.data, 'base64'))
  console.log('✓ bed-picker.png saved')

  await client.close()
  console.log('\n=== ✅ Done ===')
}

main().catch(e => { console.error('Error:', e.message); process.exit(1) })
