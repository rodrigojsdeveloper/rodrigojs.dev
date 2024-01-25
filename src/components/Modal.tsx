'use client'

import { useContext } from 'react'
import CustomLink from './CustomLink'
import Paragraph from './Paragraph'
import Line from './Line'
import Button from './Button'
import { Context } from '@/contexts/context'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socials from '@/utils/socials'
import SourceCode from '@/svgs/SourceCode'
import copyLink from '@/utils/copyLink'
import { useTheme } from 'next-themes'
import CopyLink from '@/svgs/CopyLink'
import Sun from '@/svgs/Sun'
import Moon from '@/svgs/Moon'
import Close from '@/svgs/Close'
import GitHub from '@/svgs/GitHub'
import LinkedIn from '@/svgs/LinkedIn'
import Instagram from '@/svgs/Instagram'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)
  const { setTheme } = useTheme()

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <GitHub />
      case 'LinkedIn':
        return <LinkedIn />
      case 'Instagram':
        return <Instagram />
      default:
        return null
    }
  }

  const handleCopyLink = () => {
    copyLink()
    handleOpenModal()
  }

  return (
    <ModalBackground>
      <div className="flex h-full max-h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-gray-200 bg-black duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-4 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal} arialLabel="Close Button">
            <Close />
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-3 pb-2 pt-1.5">
          <Paragraph text="Redes sociais" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            {socials.map((media, index) => {
              const newMedia = { ...media, svg: getSocialIcon(media.name) }

              return (
                <CustomLink
                  key={index}
                  href={newMedia.link}
                  Icon={newMedia.svg}
                  text={newMedia.name}
                  style="text-gray-100"
                  onClick={handleOpenModal}
                  externalLink
                  target="_blank"
                />
              )
            })}
          </nav>

          <Paragraph text="Temas" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            <div
              onClick={() => setTheme('light')}
              className="row group flex h-10 w-full cursor-pointer items-center gap-2 rounded-def border border-solid border-transparent px-2.5 py-2 text-sm text-gray-100 hover:border-hover"
            >
              <Sun />
              Claro
            </div>
            <div
              onClick={() => setTheme('dark')}
              className="row group flex h-10 w-full cursor-pointer items-center gap-2 rounded-def border border-solid border-transparent px-2.5 py-2 text-sm text-gray-100 hover:border-hover"
            >
              <Moon />
              Escuro
            </div>
          </nav>

          <Paragraph text="Sugestões" style="text py-1.5" />
          <nav className="flex flex-col gap-1">
            <button
              onClick={handleCopyLink}
              className="row group flex h-10 w-full items-center gap-2 rounded-def border border-solid border-transparent px-2.5 py-2 text-sm text-gray-100 hover:border-hover"
            >
              <CopyLink />
              Copiar link
            </button>
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev"
              Icon={<SourceCode />}
              text="Código fonte"
              style="text-gray-100"
              onClick={handleOpenModal}
              externalLink
            />
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
