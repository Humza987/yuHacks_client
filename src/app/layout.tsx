import Navbar from '@/components/common/Navbar.component'
import HackerCard from '@/components/common/HackerCard.component'
import Button from '@/components/common/Button.component'
import Socials from '@/components/common/Socials.component'
import YorkUHacksWatermark from '@/components/common/YorkUHacksWatermark.component'
import { Inter } from 'next/font/google'
import './globals.css'

import localFont from 'next/font/local'
// import YorkUHacksWatermark from '@/components/common/YorkUHacksWatermark.component'
import ChallengeCard from '@/components/common/ChallengeCard.component'
import { HackerForm } from '@/components/common/HackerForm.component'
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
    <html lang="en">
      <body className={`${inter.className} bg-[#F6F6F6] flex items-center justify-center`}>
      {/* <Navbar/> */}
      <HackerForm isHacker={false}/> {/* flexible form, change the isHacker prop to switch between hacker and organizer*/}
        {children}</body>
    </html>
  )
}
