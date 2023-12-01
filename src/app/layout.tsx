import HeaderMobile from '@/components/HeaderMobile'
import { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import { Kanit } from 'next/font/google'
import type { Metadata } from 'next'
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
    <html lang="en" className={`${kanit.variable} h-screen w-full font-kanit`}>
      <body className="h-full max-lg:flex">
        <div className="centralize-background relative z-[-1] mt-12 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#0141ff] after:opacity-40 after:blur-2xl after:content-[''] before:lg:h-[360px]">
          <div className="relative drop-shadow-[0_0_0.3rem_#0141ff3] invert" />
        </div>

        <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-10 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24 max-sm:px-5">
          <Header />
          <HeaderMobile />

          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
