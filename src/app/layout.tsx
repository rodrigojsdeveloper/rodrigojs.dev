import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { HeaderMobile } from '@/components/header-mobile'
import ThemeProvider from '@/contexts/theme-provider'
import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { Toaster } from 'sonner'
import { cn } from '@/utils/cn'
import './globals.css'

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
      lang="pt"
      className={cn(
        'scroll-smooth font-kanit antialiased selection:bg-neutral-500/10',
        kanit.variable,
      )}
    >
      <body className="px-6 pb-5 pt-24 sm:px-8 lg:pb-10 lg:pt-28">
        <div className="mx-auto flex w-full max-w-6xl flex-row justify-center gap-x-10">
          <ThemeProvider>
            <Header />
            <HeaderMobile />
            <Modal />
            <main className="w-full lg:max-w-[50rem]">{children}</main>
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
