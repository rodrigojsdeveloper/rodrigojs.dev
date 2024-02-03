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
import { Code2, Link, X } from 'lucide-react'

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
            <X size={20} strokeWidth={1.5} color="var(--gray-100)" />
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
                Icon={<media.svg size={20} strokeWidth={1.5} />}
                text={media.name}
                className="font-light text-gray-100"
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
                  Icon={<newTheme.svg size={20} strokeWidth={1.5} />}
                  text={newTheme.title}
                  onClick={() => setTheme(newTheme.theme)}
                  className="font-light text-gray-100"
                />
              )
            })}
          </nav>

          <p className="text-pretty py-2 text-xs text-gray-100">Sugestões</p>
          <nav className="flex flex-col gap-0.5">
            <CustomLink
              href=""
              Icon={<Link size={20} strokeWidth={1.5} />}
              text="Copiar link"
              onClick={handleCopyLink}
              className="font-light text-gray-100"
            />
            <CustomLink
              target="_blank"
              href="https://github.com/rodrigojsdeveloper/rodrigojs.dev"
              Icon={<Code2 size={20} strokeWidth={1.5} />}
              text="Código fonte"
              className="font-light text-gray-100"
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
