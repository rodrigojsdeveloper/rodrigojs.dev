import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Form from '@/components/Form'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Header />
      <HeaderMobile />

      <main className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
        <Title title="Contact" />
        <Paragraphy
          text="Feel free to get in touch, and we can discuss how we can work together."
          style="text-md my-6"
        />

        <h3 className="text-md font-normal leading-relaxed text-gray-1">
          My social networks
        </h3>

        <nav className="mb-6 mt-4 flex flex-wrap gap-3">
          <Link
            target="_blank"
            href="https://github.com/rodrigojsdeveloper/"
            className="flex w-full max-w-fit items-center gap-1.5 rounded-def border border-solid border-gray-4 px-2.5 py-2 text-sm font-medium text-gray-3 hover:bg-borderButton-1 active:bg-borderButton-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#A3A3A3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                <path d="M9 20.027c-3 .973-5.5 0-7-3" />
              </g>
            </svg>
            GitHub
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/"
            className="flex w-full max-w-fit items-stretch gap-1.5 rounded-def border border-solid border-gray-4 px-2.5 py-2 text-sm font-medium text-gray-3 hover:bg-borderButton-1 active:bg-borderButton-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#A3A3A3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.54 1.71a1.33 1.33 0 0 1-1.3 1.34A1.36 1.36 0 0 1 .93 1.71A1.34 1.34 0 0 1 2.24.43a1.33 1.33 0 0 1 1.3 1.28ZM1.07 5.43c0-.77.49-.65 1.17-.65s1.16-.12 1.16.65v7.5c0 .78-.49.62-1.16.62s-1.17.16-1.17-.62Zm4.35 0c0-.43.16-.59.41-.64s1.11 0 1.41 0s.42.49.41.86a2.51 2.51 0 0 1 2.24-1a3 3 0 0 1 3.18 3.13v5.12c0 .78-.48.62-1.16.62s-1.16.16-1.16-.62v-4a1.44 1.44 0 0 0-1.52-1.56a1.45 1.45 0 0 0-1.48 1.59v4c0 .78-.49.62-1.17.62s-1.16.16-1.16-.62Z"
              />
            </svg>
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/eurodrigojs/"
            className="flex w-full max-w-fit items-center gap-1.5 rounded-def border border-solid border-gray-4 px-2.5 py-2 text-sm font-medium text-gray-3 hover:bg-borderButton-1 active:bg-borderButton-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#A3A3A3"
                d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
              />
            </svg>
            Instagram
          </Link>
        </nav>

        <Line />

        <h3 className="text-md font-normal leading-relaxed text-gray-1">
          Send me an email
        </h3>

        <Paragraphy
          text="I greatly enjoy interacting with programmers, creators, and technology students. If you're interested in my work or would like to provide feedback on this site, let's have a chat."
          style="text-md mt-3 mb-6"
        />

        <Form />
        <Footer />
      </main>
    </>
  )
}
