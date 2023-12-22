import { PropsWithChildren } from 'react'
import HeaderMobile from '@/components/HeaderMobile'
import Header from '@/components/Header'
import { Kanit } from 'next/font/google'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'rodrigojsdeveloper',
  description: 'My personal website.',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <html lang="en" className={`${kanit.variable} w-full font-kanit`}>
        <body className="m-auto flex w-full max-w-6xl flex-row justify-center gap-x-10 overflow-x-hidden px-6 pb-5 pt-24 sm:px-8 lg:pb-10 lg:pt-28">
          <div className="center"></div>

          <Header />
          <HeaderMobile />
          <main className="flex w-full max-w-none flex-col justify-between gap-y-6 lg:max-w-[50rem]">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  )
}

export default RootLayout
