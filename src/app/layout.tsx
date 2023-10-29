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
        <div className="centralize-background relative z-[-1] mt-12 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:to-transparent before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:from-sky-900 after:via-[#0141ff] after:via-blue-200 after:opacity-40 after:blur-2xl after:content-[''] before:lg:h-[360px]">
          <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" />
        </div>

        {children}
      </body>
    </html>
  )
}
