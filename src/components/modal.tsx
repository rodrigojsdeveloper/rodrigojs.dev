'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Line } from './line'
import { LINKS } from '@/data/links'
import { CustomLink } from './custom-link'
import { useTheme } from 'next-themes'
import { Search, X } from 'lucide-react'
import { translate } from '@/i18n'
import { cn } from '@/utils/cn'
import { LanguageProps, SocialProps, ThemeProps } from '@/interfaces'
import i18next from 'i18next'

export const Modal = () => {
  const { setTheme } = useTheme()
  const [searchValue, setSearchValue] = useState('')

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

  const showSuggestions =
    filteredSocials.length === 0 &&
    filteredThemes.length === 0 &&
    filteredLanguages.length === 0

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    window.location.reload()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label={translate('links.arial_label.settings')}
          className="group fixed bottom-2 left-2 z-[2] flex size-12 items-center justify-center rounded-full bg-foreground p-2 duration-200 lg:bottom-4 lg:left-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5 stroke-background"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-shadow backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-30 flex h-[95%] max-h-[21rem] w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-solid border-border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            showSuggestions && 'h-[7.3rem]',
          )}
        >
          <div className="flex h-[3.05rem] flex-row items-center justify-between py-3 pl-3 pr-2">
            <div className="flex w-full flex-row items-center gap-2.5">
              <Search
                size={20}
                strokeWidth={2}
                className="text-foreground-muted"
              />
              <input
                placeholder={translate('links.placeholder')}
                className="w-full bg-transparent text-sm font-light text-foreground-muted placeholder:text-foreground-muted focus:placeholder:text-transparent"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            <Dialog.Close className="group flex size-8 items-center justify-center rounded-radius border border-solid border-transparent p-1 hover:border-border focus-visible:border-border">
              <X
                size={16}
                strokeWidth={1.5}
                className="stroke-foreground-muted"
              />
            </Dialog.Close>
          </div>

          <Line />

          <div
            className={cn(
              'overflow-y-auto px-3 pb-2 pt-1.5',
              showSuggestions && 'm-auto',
            )}
          >
            {filteredLanguages.length > 0 && (
              <>
                <p className="text-pretty px-1 py-2 text-xs text-foreground-muted">
                  {translate('links.title.languages')}
                </p>
                <nav>
                  {filteredLanguages.map(
                    (language: LanguageProps, index: number) => (
                      <CustomLink
                        key={`language ${index}`}
                        href=""
                        Icon={<language.icon size={20} strokeWidth={2} />}
                        text={language.title}
                        onClick={() => handleChangeLanguage(language.locale)}
                      />
                    ),
                  )}
                </nav>
              </>
            )}

            {filteredThemes.length > 0 && (
              <>
                <p className="text-pretty px-1 py-2 text-xs text-foreground-muted">
                  {translate('links.title.themes')}
                </p>
                <nav>
                  {filteredThemes.map((theme: ThemeProps, index: number) => {
                    const newTheme = { ...theme, theme: getTheme(theme.theme) }

                    return (
                      <CustomLink
                        key={`theme ${index}`}
                        href=""
                        Icon={<newTheme.icon size={20} strokeWidth={2} />}
                        text={newTheme.title}
                        onClick={() => setTheme(newTheme.theme)}
                        className="font-light"
                      />
                    )
                  })}
                </nav>
              </>
            )}

            {filteredSocials.length > 0 && (
              <>
                <p className="text-pretty px-1 py-2 text-xs text-foreground-muted">
                  {translate('links.title.socials')}
                </p>
                <nav>
                  {filteredSocials.map((social: SocialProps, index: number) => (
                    <CustomLink
                      key={`media ${index}`}
                      href={social.link}
                      Icon={<social.icon size={20} strokeWidth={2} />}
                      text={social.title}
                      className="font-light"
                      externalLink
                      target="_blank"
                      isLink
                    />
                  ))}
                </nav>
              </>
            )}

            {showSuggestions && (
              <p className="text-center text-sm text-foreground-muted">
                {translate('links.not_found')}
              </p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
