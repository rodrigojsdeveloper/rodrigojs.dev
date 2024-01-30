'use client'

import { useContext } from 'react'
import CustomLink from './CustomLink'
import Line from './Line'
import Button from './Button'
import { Context } from '@/contexts/context'
import SubTitle from './SubTitle'
import ModalBackground from './ModalBackground'
import socials from '@/utils/socials'
import copyLink from '@/utils/copyLink'
import { useTheme } from 'next-themes'
import {
  Close,
  CopyLink,
  GitHub,
  Instagram,
  LinkedIn,
  Moon,
  Sun,
  SourceCode,
  Laptop,
} from '@/svgs'

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
      <div className="flex h-full max-h-[22.425rem] w-full max-w-[31.9rem] animate-modal flex-col rounded-def border border-solid border-gray-200 bg-background duration-300">
        <div className="flex flex-row items-center justify-between py-2.5 pl-4 pr-2">
          <SubTitle title="Menu" />

          <Button handleState={handleOpenModal} arialLabel="Close Button">
            <Close />
          </Button>
        </div>

        <Line />

        <div className="overflow-y-auto px-3 pb-2 pt-1.5">
          <p className="text-pretty py-2 text-xs text-gray-100">
            Redes sociais
          </p>
          <nav className="flex flex-col gap-1">
            {socials.map((media, index) => {
              const newMedia = { ...media, svg: getSocialIcon(media.name) }

              return (
                <CustomLink
                  key={index}
                  href={newMedia.link}
                  Icon={newMedia.svg}
                  text={newMedia.name}
                  style="text-gray-100 font-light"
                  onClick={handleOpenModal}
                  externalLink
                  target="_blank"
                  isLink
                />
              )
            })}
          </nav>

          <p className="text-pretty py-2 text-xs text-gray-100">Temas</p>
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<Sun />}
              text="Claro"
              onClick={() => setTheme('light')}
            />
            <CustomLink
              href=""
              Icon={<Moon />}
              text="Escuro"
              onClick={() => setTheme('dark')}
            />
            <CustomLink
              href=""
              Icon={<Laptop />}
              text="Sistema"
              onClick={() => setTheme('system')}
            />
          </nav>

          <p className="text-pretty py-2 text-xs text-gray-100">Sugestões</p>
          <nav className="flex flex-col gap-1">
            <CustomLink
              href=""
              Icon={<CopyLink />}
              text="Copiar link"
              onClick={handleCopyLink}
            />
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev"
              Icon={<SourceCode />}
              text="Código fonte"
              style="text-gray-100 font-light"
              onClick={handleOpenModal}
              externalLink
              isLink
            />
          </nav>
        </div>
      </div>
    </ModalBackground>
  )
}

export default Modal
