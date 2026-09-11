import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HostelEase — University Hostel & Bed Allocation Platform | SSM Limited',
  description:
    'HostelEase is the modern hostel management platform for universities. Self-serve bed allocation, bursary code payments, real-time occupancy, and QR check-in — built for students, wardens, and bursars. Developed by SSM Limited.',
  keywords: [
    'HostelEase',
    'hostel management software',
    'university hostel allocation',
    'bed allocation system',
    'bursary code payment',
    'student housing platform',
    'SSM Limited',
    'edtech Nigeria',
    'hostel management Nigeria',
  ],
  authors: [{ name: 'SSM Limited' }],
  creator: 'SSM Limited',
  publisher: 'SSM Limited',
  metadataBase: new URL('https://hostelease.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://hostelease.vercel.app',
    title: 'HostelEase — University Hostel & Bed Allocation Platform',
    description:
      'Self-serve bed allocation, bursary code payments, real-time occupancy, and QR check-in. Trusted by universities to manage thousands of beds.',
    siteName: 'HostelEase',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HostelEase — University Hostel & Bed Allocation Platform',
    description:
      'Self-serve bed allocation, bursary code payments, real-time occupancy, and QR check-in.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
