'use client'

import Home from '@/svgs/Home'
import CustomLink from './CustomLink'
import About from '@/svgs/About'
import Projects from '@/svgs/Projects'
import Contact from '@/svgs/Contact'
import Experiences from '@/svgs/Experiences'
import Github from '@/svgs/Github'
import Linkedin from '@/svgs/Linkedin'
import Instagram from '@/svgs/Instagram'
import Paragraphy from './Paragraphy'
import Close from '@/svgs/Close'
import Line from './Line'
import Chain from '@/svgs/Chain'
import Code from '@/svgs/Code'
import Button from './Button'
import { Context } from '@/contexts/context'
import { useContext } from 'react'
import Link from 'next/link'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText('https://rodrigojs.dev/')
      .then(() => console.log)
      .catch((err) => console.error('Erro ao copiar texto: ', err))
  }

  return (
    <ModalBackground>
      <div className="flex h-[350px] w-full max-w-488 animate-modal flex-col rounded-def border border-solid border-line bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-4 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal}>
            <Close />
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-4 pb-2 pt-1.5">
          <Paragraphy text="Navegação" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <CustomLink href="" Icon={<Home />} text="Home" />
            <CustomLink href="about" Icon={<About />} text="About" />
            <CustomLink href="projects" Icon={<Projects />} text="Projects" />
            <CustomLink href="contact" Icon={<Contact />} text="Contact" />
            <CustomLink
              href="experiences"
              Icon={<Experiences />}
              text="Experiences"
            />
          </nav>

          <Paragraphy text="Redes sociais" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <Link
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/"
              suppressHydrationWarning={true}
              className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm hover:bg-link-hover active:bg-link-active`}
            >
              <Github /> GitHub
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/"
              suppressHydrationWarning={true}
              className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm hover:bg-link-hover active:bg-link-active`}
            >
              <Linkedin /> LinkedIn
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/eurodrigojs/"
              suppressHydrationWarning={true}
              className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm hover:bg-link-hover active:bg-link-active`}
            >
              <Instagram /> Instagram
            </Link>
          </nav>

          <Paragraphy text="Sugestões" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={copyToClipboard}
              className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm hover:bg-link-hover active:bg-link-active`}
            >
              <Chain /> Copy link
            </button>
            <Link
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev/"
              suppressHydrationWarning={true}
              className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm hover:bg-link-hover active:bg-link-active`}
            >
              <Code /> Source code
            </Link>
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
