'use client'

import Home from '@/svgs/Home'
import CustomLink from './CustomLink'
import About from '@/svgs/About'
import Projects from '@/svgs/Projects'
import Contact from '@/svgs/Contact'
import Experiences from '@/svgs/Experiences'
import Paragraphy from './Paragraphy'
import Line from './Line'
import Button from './Button'
import { Context } from '@/contexts/context'
import { useContext } from 'react'
import Link from 'next/link'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socialMedia from '@/utils/socialMedia'
import Image from 'next/image'
import x from '@/assets/others/x.svg'
import code from '@/assets/others/code.svg'
import chain from '@/assets/others/chain.svg'

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
      <div className="flex h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-line bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-4 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal}>
            <Image src={x} alt="close" />
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-4 pb-2 pt-1.5">
          <Paragraphy text="Navigation" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<Home />}
              text="Home"
              style="text-color-paragraphy"
            />
            <CustomLink
              href="about"
              Icon={<About />}
              text="About"
              style="text-color-paragraphy"
            />
            <CustomLink
              href="projects"
              Icon={<Projects />}
              text="Projects"
              style="text-color-paragraphy"
            />
            <CustomLink
              href="contact"
              Icon={<Contact />}
              text="Contact"
              style="text-color-paragraphy"
            />
            <CustomLink
              href="experiences"
              Icon={<Experiences />}
              text="Experiences"
              style="text-color-paragraphy"
            />
          </nav>

          <Paragraphy text="Social media" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            {socialMedia.map((media, index) => (
              <Link
                key={index}
                target="_blank"
                href={media.link}
                className="row flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraphy hover:bg-link-hover active:bg-link-active"
              >
                <Image
                  src={media.img}
                  alt={`${media.name} social media`}
                  priority
                  className="h-[1.5rem] w-[1.5rem]"
                />
                {media.name}
              </Link>
            ))}
          </nav>

          <Paragraphy text="Suggestions" style="text-sm py-2" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={copyToClipboard}
              className="row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraphy hover:bg-link-hover active:bg-link-active"
            >
              <Image src={chain} alt="code" priority /> Copy link
            </button>
            <Link
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev/"
              suppressHydrationWarning={true}
              className="row flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm text-color-paragraphy hover:bg-link-hover active:bg-link-active"
            >
              <Image src={code} alt="code" priority /> Source code
            </Link>
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
