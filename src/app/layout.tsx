import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'
import { SideNav } from '@/components/SideNav'

import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flash cards',
  description: 'Flash cards for learning'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <div className="grid grid-cols-12 gap-4 p-4">
          <div className="col-span-12 flex sm:col-span-2">
            <SideNav />
          </div>
          <main className={'-order-1 col-span-12 sm:order-1 sm:col-span-10'}>{children}</main>
        </div>
      </body>
    </html>
  )
}
