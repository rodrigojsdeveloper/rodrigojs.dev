'use client'

import { useContext } from 'react'
import Line from './Line'
import Button from './Button'
import SubTitle from './SubTitle'
import LINKS from '@/utils/links'
import CustomLink from './CustomLink'
import { useTheme } from 'next-themes'
import copyLink from '@/utils/copyLink'
import { Context } from '@/contexts/context'
import ModalBackground from './ModalBackground'
import { Close, CopyLink, SourceCode } from '@/svgs'

const Modal = () => {
  const { handleOpenModal } = useContext(Context)
  const { setTheme } = useTheme()

  const handleCopyLink = () => {
    copyLink()
    handleOpenModal()
  }

  const getTheme = (name: string) => {
    switch (name) {
      case 'light':
        return 'light'
      case 'dark':
        return 'dark'
      case 'system':
        return 'system'
      default:
        return 'system'
    }
  }

  return (
    <ModalBackground>
      <div className="flex h-full max-h-[21rem] w-full max-w-lg animate-modal flex-col rounded-def border border-solid border-gray-200 bg-background duration-300">
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
          <nav className="flex flex-col gap-0.5">
            {LINKS.socials.map((media, index) => (
              <CustomLink
                key={`media ${index}`}
                href={media.link}
                Icon={<media.svg />}
                text={media.name}
                style="text-gray-100 font-light"
                onClick={handleOpenModal}
                externalLink
                target="_blank"
                isLink
              />
            ))}
          </nav>

          <p className="text-pretty py-2 text-xs text-gray-100">Temas</p>
          <nav className="flex flex-col gap-0.5">
            {LINKS.themes.map((theme, index) => {
              const newTheme = { ...theme, theme: getTheme(theme.theme) }

              return (
                <CustomLink
                  key={`theme ${index}`}
                  href=""
                  Icon={<newTheme.svg />}
                  text={newTheme.title}
                  onClick={() => setTheme(newTheme.theme)}
                  style="text-gray-100 font-light"
                />
              )
            })}
          </nav>

          <p className="text-pretty py-2 text-xs text-gray-100">Sugestões</p>
          <nav className="flex flex-col gap-0.5">
            <CustomLink
              href=""
              Icon={<CopyLink />}
              text="Copiar link"
              onClick={handleCopyLink}
              style="text-gray-100 font-light"
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
