import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Our Love Story - Anniversary & Valentine\'s Day',
  description: 'Celebrating our anniversary and Valentine\'s Day together - a tribute to our love story.',
}

export const viewport: Viewport = {
  themeColor: '#5c2434',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
