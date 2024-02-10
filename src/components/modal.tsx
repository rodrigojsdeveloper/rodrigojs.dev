'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState, useContext } from 'react'
import { Line } from './line'
import { LINKS } from '@/utils/links'
import { CustomLink } from './custom-link'
import { useTheme } from 'next-themes'
import { Context } from '@/contexts/context'
import { MoreHorizontal, Search, X } from 'lucide-react'
import { translate } from '@/i18n'
import { cn } from '@/utils/cn'
import { ILanguageProps, ISocialProps, IThemeProps } from '@/interfaces'

export const Modal = () => {
  const { handleChangeLanguage } = useContext(Context)
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

  return (
    <Dialog.Root>
      <Dialog.Trigger className="group flex size-8 items-center justify-center rounded-radius border border-solid border-transparent p-1.5 hover:border-border focus-visible:border-border">
        <MoreHorizontal size={20} className="stroke-muted-foreground" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-shadow backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-30 flex h-full max-h-[21rem] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 animate-modal flex-col overflow-hidden rounded-radius border border-solid border-border bg-background shadow-lg',
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

            <Dialog.Close className="group flex size-8 items-center justify-center rounded-radius border border-solid border-transparent p-1.5 hover:border-border focus-visible:border-border">
              <X
                size={20}
                strokeWidth={1.5}
                className="stroke-muted-foreground"
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
                <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                  {translate('links.title.languages')}
                </p>
                <nav>
                  {filteredLanguages.map(
                    (language: ILanguageProps, index: number) => (
                      <CustomLink
                        key={`language ${index}`}
                        href=""
                        Icon={<language.icon size={20} strokeWidth={2} />}
                        text={language.title}
                        onClick={() => handleChangeLanguage(language.locale)}
                        className="font-light text-muted-foreground"
                      />
                    ),
                  )}
                </nav>
              </>
            )}

            {filteredThemes.length > 0 && (
              <>
                <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                  {translate('links.title.themes')}
                </p>
                <nav>
                  {filteredThemes.map((theme: IThemeProps, index: number) => {
                    const newTheme = { ...theme, theme: getTheme(theme.theme) }

                    return (
                      <CustomLink
                        key={`theme ${index}`}
                        href=""
                        Icon={<newTheme.icon size={20} strokeWidth={2} />}
                        text={newTheme.title}
                        onClick={() => setTheme(newTheme.theme)}
                        className="font-light text-muted-foreground"
                      />
                    )
                  })}
                </nav>
              </>
            )}

            {filteredSocials.length > 0 && (
              <>
                <p className="text-pretty px-1 py-2 text-xs text-muted-foreground">
                  {translate('links.title.socials')}
                </p>
                <nav>
                  {filteredSocials.map(
                    (social: ISocialProps, index: number) => (
                      <CustomLink
                        key={`media ${index}`}
                        href={social.link}
                        Icon={<social.icon size={20} strokeWidth={2} />}
                        text={social.title}
                        className="font-light text-muted-foreground"
                        externalLink
                        target="_blank"
                        isLink
                      />
                    ),
                  )}
                </nav>
              </>
            )}

            {showSuggestions && (
              <p className="text-center text-sm text-muted-foreground">
                {translate('links.not_found')}
              </p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
