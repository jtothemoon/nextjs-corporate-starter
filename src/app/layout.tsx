import type { Metadata } from 'next'
import { inter, notoSansKr } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | 자몽IT',
    default: '자몽IT - 공공과 기업을 잇는 디지털 솔루션',
  },
  description:
    '공공기관과 기업을 위한 맞춤형 IT 솔루션을 제공하는 자몽IT입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
