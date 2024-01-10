import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'
import { SideNav } from '@/components/SideNav'

export const metadata: Metadata = {
  title: 'Flash cards',
  description: 'Flash cards for learning'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12 gap-4 p-4">
          <div className="col-span-2 flex">
            <SideNav />
          </div>
          <div className={'col-span-10'}>{children}</div>
        </div>
      </body>
    </html>
  )
}
