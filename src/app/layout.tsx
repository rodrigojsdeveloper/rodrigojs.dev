import HeaderMobile from '@/components/HeaderMobile'
import { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import { Kanit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/contexts'

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
      <html
        lang="en"
        className={`${kanit.variable} h-screen w-full font-kanit`}
      >
        <body className="h-full overflow-x-hidden">
          <div className="center"></div>

          <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-10 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24 max-sm:px-5">
            <Header />
            <HeaderMobile />

            {children}
          </main>
        </body>
      </html>
    </Providers>
  )
}

export default RootLayout
