'use client'

import { useContext } from 'react'
import Home from '@/svgs/Home'
import CustomLink from './CustomLink'
import About from '@/svgs/About'
import Projects from '@/svgs/Projects'
import Contact from '@/svgs/Contact'
import Paragraph from './Paragraph'
import Line from './Line'
import Button from './Button'
import { Context } from '@/contexts/context'
import Link from 'next/link'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socialMedia from '@/utils/socialMedia'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('https://rodrigojs.dev/')
      .then(() => console.log)
      .catch((err) => console.error('Erro ao copiar texto: ', err))
  }

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="h-[1.5rem] w-[1.5rem]"
          >
            <g
              fill="none"
              stroke="#888888"
              strokeLinecap="round"
              stroke-winejoin="round"
              strokeWidth="1.5"
              className="duration-300 group-hover:stroke-zinc-50"
            >
              <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
              <path d="M9 20.027c-3 .973-5.5 0-7-3" />
            </g>
          </svg>
        )
      case 'LinkedIn':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className="h-[1.5rem] w-[1.5rem]"
          >
            <path
              fill="#888888"
              fillRule="evenodd"
              className="duration-300 group-hover:fill-zinc-50"
              d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5ZM3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V8.75h-2.5ZM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V8Zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75h-2.5Z"
              clipRule="evenodd"
            />
          </svg>
        )
      case 'Instagram':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="h-[1.5rem] w-[1.5rem]"
          >
            <path
              fill="#888888"
              className="duration-300 group-hover:fill-zinc-50"
              d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <ModalBackground>
      <div className="flex h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-line bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-3 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#888888"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 7l10 10M7 17L17 7"
                className="h-5 w-5 duration-300 group-hover:stroke-zinc-50"
              />
            </svg>
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-3 pb-2 pt-1.5">
          <Paragraph text="Navigation" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<Home />}
              text="Home"
              style="text-color-paragraph"
            />
            <CustomLink
              href="about"
              Icon={<About />}
              text="About"
              style="text-color-paragraph"
            />
            <CustomLink
              href="projects"
              Icon={<Projects />}
              text="Projects"
              style="text-color-paragraph"
            />
            <CustomLink
              href="contact"
              Icon={<Contact />}
              text="Contact"
              style="text-color-paragraph"
            />
          </nav>

          <Paragraph text="Social media" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            {socialMedia.map((media, index) => {
              const newMedia = { ...media, svg: getSocialIcon(media.name) }

              return (
                <Link
                  key={index}
                  target="_blank"
                  href={newMedia.link}
                  className="row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraph hover:bg-link-hover hover:text-zinc-50 active:bg-link-active"
                >
                  {newMedia.svg}
                  {newMedia.name}
                </Link>
              )
            })}
          </nav>

          <Paragraph text="Suggestions" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={copyToClipboard}
              className="row group flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraph hover:bg-link-hover hover:text-zinc-50 active:bg-link-active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#888888"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  className="duration-300 group-hover:stroke-zinc-50"
                >
                  <path d="m12 17l-1.5 1.5a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a3.536 3.536 0 0 1 5 0v0" />
                  <path d="m12 7l1.5-1.5a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a3.536 3.536 0 0 1-5 0v0" />
                </g>
              </svg>{' '}
              Copy link
            </button>
            <Link
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev/"
              suppressHydrationWarning={true}
              className="row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraph hover:bg-link-hover hover:text-zinc-50 active:bg-link-active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" strokeWidth="1.5">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="#888888"
                    className="duration-300 group-hover:fill-zinc-50"
                    d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z"
                  />
                </g>
              </svg>{' '}
              Source code
            </Link>
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
