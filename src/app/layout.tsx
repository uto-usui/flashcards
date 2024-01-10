import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Flash cards',
  description: 'Flash cards for learning'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
