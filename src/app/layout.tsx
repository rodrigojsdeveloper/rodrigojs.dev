import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { HeaderMobile } from '@/components/header-mobile'
import ThemeProvider from '@/contexts/theme-provider'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'
import './globals.css'
import { Toaster } from 'sonner'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'rodrigojsdeveloper',
  description: 'My personal website.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn(
        'font-kanit selection:bg-neutral-500/10 selection:text-neutral-400',
        kanit.variable,
      )}
    >
      <body className="px-6 pb-5 pt-24 sm:px-8 lg:pb-10 lg:pt-28">
        <div className="mx-auto flex w-full max-w-6xl flex-row justify-center gap-x-10">
          <ThemeProvider>
            <Header />
            <HeaderMobile />
            <main className="w-full lg:max-w-[50rem]">{children}</main>
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
