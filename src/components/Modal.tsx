'use client'

import { useState, useContext } from 'react'
import { Line } from './Line'
import { Button } from './Button'
import { LINKS } from '@/utils/links'
import { CustomLink } from './CustomLink'
import { useTheme } from 'next-themes'
import { copyLink } from '@/utils/copyLink'
import { Context } from '@/contexts/context'
import { ModalBackground } from './ModalBackground'
import { Code2, Link, Search, X } from 'lucide-react'
import { translate } from '@/i18n'
import { cn } from '@/utils/cn'

const Modal = () => {
  const { handleOpenModal, handleChangeLanguage } = useContext(Context)
  const { setTheme } = useTheme()
  const [searchValue, setSearchValue] = useState('')

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

  const filterLinks = (links: any) => {
    return links.filter((link: any) => {
      const searchText = searchValue.toLowerCase()
      return link.title.toLowerCase().includes(searchText)
    })
  }

  const filteredSocials = filterLinks(LINKS.socials)
  const filteredThemes = filterLinks(LINKS.themes)
  const filteredLanguages = filterLinks(LINKS.languages)
  const filteredSuggestions = filterLinks([
    {
      link: '',
      svg: Link,
      title: translate('links.copy_link'),
      onClick: handleCopyLink,
      externalLink: false,
      isLink: false,
    },
    {
      link: 'https://github.com/rodrigojsdeveloper/rodrigojs.dev',
      svg: Code2,
      title: translate('links.source_code'),
      onClick: handleOpenModal,
      externalLink: true,
      isLink: true,
    },
  ])

  const showSuggestions =
    filteredSocials.length === 0 &&
    filteredThemes.length === 0 &&
    filteredLanguages.length === 0

  return (
    <ModalBackground>
      <div
        className={cn(
          'flex h-full max-h-[21rem] w-full max-w-lg animate-modal flex-col rounded-radius border border-solid border-border bg-background shadow-lg',
          showSuggestions && 'h-[7.3rem]',
        )}
      >
        <div className="flex h-[3.05rem] flex-row items-center justify-between py-3 pl-4 pr-2">
          <div className="flex w-full flex-row items-center gap-3">
            <Search
              size={20}
              strokeWidth={2}
              className="text-muted-foreground"
            />
            <input
              placeholder={translate('links.placeholder')}
              className="w-full bg-transparent text-muted-foreground placeholder:text-muted-foreground focus:placeholder:text-transparent"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <Button handleState={handleOpenModal} arialLabel="Close Button">
            <X
              size={20}
              strokeWidth={1.5}
              className="stroke-muted-foreground"
            />
          </Button>
        </div>

        <Line />

        <div
          className={cn(
            'overflow-y-auto px-3 pb-2 pt-1.5',
            showSuggestions && 'm-auto',
          )}
        >
          {filteredSocials.length > 0 && (
            <>
              <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                {translate('links.title.socials')}
              </p>
              <nav>
                {filteredSocials.map((media: any, index: number) => (
                  <CustomLink
                    key={`media ${index}`}
                    href={media.link}
                    Icon={<media.svg size={20} strokeWidth={2} />}
                    text={media.title}
                    className="font-light text-muted-foreground"
                    onClick={handleOpenModal}
                    externalLink
                    target="_blank"
                    isLink
                  />
                ))}
              </nav>
            </>
          )}

          {filteredThemes.length > 0 && (
            <>
              <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                {translate('links.title.themes')}
              </p>
              <nav>
                {filteredThemes.map((theme: any, index: number) => {
                  const newTheme = { ...theme, theme: getTheme(theme.theme) }

                  return (
                    <CustomLink
                      key={`theme ${index}`}
                      href=""
                      Icon={<newTheme.svg size={20} strokeWidth={2} />}
                      text={newTheme.title}
                      onClick={() => setTheme(newTheme.theme)}
                      className="font-light text-muted-foreground"
                    />
                  )
                })}
              </nav>
            </>
          )}

          {filteredLanguages.length > 0 && (
            <>
              <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                {translate('links.title.languages')}
              </p>
              <nav>
                {filteredLanguages.map((language: any, index: number) => (
                  <CustomLink
                    key={`language ${index}`}
                    href=""
                    Icon={<language.svg />}
                    text={language.title}
                    onClick={() => handleChangeLanguage(language.locale)}
                    className="font-light text-muted-foreground"
                  />
                ))}
              </nav>
            </>
          )}

          {filteredSuggestions.length > 0 && (
            <>
              <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                {translate('links.title.suggestions')}
              </p>
              <nav>
                {filteredSuggestions.map((suggestion: any, index: number) => (
                  <CustomLink
                    key={`suggestion ${index}`}
                    href={suggestion.link}
                    Icon={<suggestion.svg size={20} strokeWidth={2} />}
                    text={suggestion.title}
                    className="font-light text-muted-foreground"
                    onClick={suggestion.onClick}
                    externalLink={suggestion.externalLink}
                    target="_blank"
                    isLink={suggestion.isLink}
                  />
                ))}
              </nav>
            </>
          )}

          {showSuggestions && (
            <p className="text-center text-sm text-muted-foreground">
              {translate('links.not_found')}
            </p>
          )}
        </div>
      </div>
    </ModalBackground>
  )
}

export { Modal }
