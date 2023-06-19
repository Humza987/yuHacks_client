import Navbar from '@/components/common/Navbar.component'
import './globals.css'
import { Inter } from 'next/font/google'

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const ndot47 = localFont({
  src: '../public/fonts/ndot-47-inspired-by-nothing.ttf',
  display: 'swap',
  variable: '--font-ndot-47',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ndot47.variable}>
      <body >
      {/* <Navbar/> */}

        {children}
        </body>
    </html>
  )
}
