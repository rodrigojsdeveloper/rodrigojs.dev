import HeaderMobile from '@/components/HeaderMobile'
import { PropsWithChildren } from 'react'
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
      <html
        lang="en"
        className={`${kanit.variable} h-screen w-full font-kanit`}
      >
        <body className="h-full overflow-x-hidden">
          <div className="center"></div>

          <main className="m-auto flex w-full max-w-6xl flex-row justify-center gap-x-10 px-8 pb-8 pt-24 sm:px-8 lg:pb-10 lg:pt-28">
            <Header />
            <HeaderMobile />

            <section className="mb-12 mt-6 flex w-full max-w-none animate-up flex-col gap-y-6 lg:mb-0 lg:mt-0 lg:max-w-800">
              {children}

              <Footer />
            </section>
          </main>
        </body>
      </html>
    </Providers>
  )
}

export default RootLayout
