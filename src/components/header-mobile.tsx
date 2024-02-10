'use client'

import { useContext } from 'react'
import author from '@/assets/author.jpg'
import { Image } from '@/components/image'
import Link from 'next/link'
import { DropDown } from './dropdown'
import { Button } from './button'
import { Modal } from './modal'
import { Context } from '@/contexts/context'
import { X, Menu } from 'lucide-react'
import { translate } from '@/i18n'

export const HeaderMobile = () => {
  const { openDropDown, handleOpenDropDown } = useContext(Context)

  return (
    <>
      {openDropDown ? <DropDown /> : null}
      <header className="fixed top-0 z-10 flex h-20 w-full flex-row items-center justify-between bg-background px-6 pt-2 sm:px-8 lg:hidden">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full"
        >
          <Image
            src={author}
            alt="Rodrigo Silva"
            className="h-11 w-11 rounded-full"
          />
        </Link>

        <div className="flex items-center gap-1">
          <Modal />

          {!openDropDown ? (
            <Button
              handleState={handleOpenDropDown}
              arialLabel={translate('links.arial_label.drop_down')}
            >
              <Menu
                size={20}
                strokeWidth={1.5}
                className="stroke-muted-foreground"
              />
            </Button>
          ) : (
            <Button
              handleState={handleOpenDropDown}
              arialLabel={translate('links.arial_label.close')}
            >
              <X
                size={20}
                strokeWidth={1.5}
                className="stroke-muted-foreground"
              />
            </Button>
          )}
        </div>
      </header>
    </>
  )
}
