import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxury Hair & Beauty Salon - Professional Services in Islamabad',
  description:
    'Premium ladies salon in Islamabad offering professional hair, makeup, and skincare services. Book your appointment today!',
  generator: 'Next.js',
  icons: {
    icon: '/fav-icon1.png',
    apple: '/fav-icon1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}