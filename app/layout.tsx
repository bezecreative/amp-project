import type { Metadata } from 'next'
import { Titillium_Web, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// AMP Brand Typography: Titillium Web as primary font
// Atlas Grotesk is the primary brand font but not available on Google Fonts
// Titillium Web is the secondary brand font and works well for digital
const titilliumWeb = Titillium_Web({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-titillium'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'AMP MCP - Your Car Wash Data, Powered by AI',
  description: 'AMP MCP is a secure bridge between your car wash data and AI tools like Claude. Ask questions, get insights, and make data-driven decisions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${titilliumWeb.variable} ${geistMono.variable} bg-white`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
