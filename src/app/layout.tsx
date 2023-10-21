import { Poppins, Kanit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'rodrigojsdeveloper',
  description:
    'Professional portfolio highlighting technical skills and problem solving in a simple, modern and intuitive interface.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${
          (poppins.className, kanit.className)
        } relative m-auto flex min-h-screen w-full max-w-6xl flex-row justify-between gap-x-12 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5`}
      >
        <div className="centralize-background relative z-[-1] mt-12 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
        </div>

        {children}
      </body>
    </html>
  )
}
