import { PropsWithChildren } from 'react'
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
  description:
    'Professional portfolio highlighting technical skills and problem solving in a simple, modern and intuitive interface.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${kanit.variable} font-kanit`}>
      <body className="m-auto flex min-h-screen w-full items-center">
        <div className="centralize-background relative z-[-1] mt-12 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
        </div>

        {children}
      </body>
    </html>
  )
}
