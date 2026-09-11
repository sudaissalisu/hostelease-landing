/**
 * CDP screenshot script — uses pre-obtained token (from curl)
 * Sets the cookie + localStorage, then takes screenshots
 */
const CDP = require('chrome-remote-interface')
const fs = require('fs')

const PROD_URL = 'https://ausu.ssm.com.ng'

// Read token + user from files (created by the curl step)
const TOKEN = fs.readFileSync('/tmp/hostel-token.txt', 'utf8').trim()
const USER_DATA = JSON.parse(fs.readFileSync('/tmp/hostel-user.txt', 'utf8')).user

async function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  console.log('Token:', TOKEN.slice(0, 40) + '...')
  console.log('User:', USER_DATA.email, '|', USER_DATA.role)

  const client = await CDP()
  const { Page, Runtime, Network } = client
  await Promise.all([Page.enable(), Runtime.enable(), Network.enable()])

  // Step 1: Set cookie BEFORE navigating
  await Network.setCookie({
    name: 'hostel-session',
    value: TOKEN,
    domain: 'ausu.ssm.com.ng',
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
  })
  console.log('✓ Cookie set')

  // Step 2: Navigate to the app
  await Page.navigate({ url: PROD_URL })
  await Page.loadEventFired()
  await delay(3000)

  // Step 3: Inject session into localStorage (Zustand persist)
  await Runtime.evaluate({
    expression: `
      try {
        localStorage.setItem('hostel-ease-auth', JSON.stringify({
          user: ${JSON.stringify(USER_DATA)},
          token: '${TOKEN}',
          requiresPasswordChange: false,
        }));
      } catch(e) {}
    `,
  })
  console.log('✓ Session injected into localStorage')

  // Step 4: Reload — SPA reads localStorage on mount
  await Page.reload()
  await Page.loadEventFired()
  await delay(10000)

  // Step 5: Check what's on the page
  const bodyText = await Runtime.evaluate({ expression: 'document.body.innerText.slice(0, 400)' })
  console.log('Body:', bodyText.result.value?.slice(0, 200))

  // Step 6: Take admin dashboard screenshot
  const ss1 = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  fs.writeFileSync('/home/z/hostelease-landing/public/dashboard-admin.png', Buffer.from(ss1.data, 'base64'))
  console.log('✓ dashboard-admin.png saved')

  // Step 7: Navigate to /rooms (public bed availability page)
  await Page.navigate({ url: PROD_URL + '/rooms' })
  await Page.loadEventFired()
  await delay(5000)
  const ss2 = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  fs.writeFileSync('/home/z/hostelease-landing/public/bed-picker.png', Buffer.from(ss2.data, 'base64'))
  console.log('✓ bed-picker.png saved')

  // Step 8: Navigate to /qr-verify (public QR verification page)
  await Page.navigate({ url: PROD_URL + '/qr-verify' })
  await Page.loadEventFired()
  await delay(3000)
  const ss3 = await Page.captureScreenshot({ format: 'png', fromSurface: true })
  fs.writeFileSync('/home/z/hostelease-landing/public/dashboard-student.png', Buffer.from(ss3.data, 'base64'))
  console.log('✓ dashboard-student.png saved')

  await client.close()
  console.log('\n=== ✅ Done ===')
}

main().catch(e => { console.error('Error:', e.message); process.exit(1) })
