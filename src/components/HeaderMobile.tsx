'use client'

import { useContext } from 'react'
import author from '@/assets/author.jpg'
import Image from '@/components/Image'
import Link from 'next/link'
import DropDown from './DropDown'
import Button from './Button'
import Modal from './Modal'
import { Context } from '@/contexts/context'
import { Close, Menu, MenuHamburguer } from '@/svgs'

const HeaderMobile = () => {
  const { openDropDown, openModal, handleOpenDropDown, handleOpenModal } =
    useContext(Context)

  return (
    <>
      {openDropDown ? <DropDown /> : null}
      {openModal ? <Modal /> : null}
      <header className="bg-background fixed top-0 z-10 flex h-20 w-full flex-row items-center justify-between px-6 pt-2 sm:px-8 lg:hidden">
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
          <Button handleState={handleOpenModal} arialLabel="Settings Button">
            <Menu />
          </Button>

          {!openDropDown ? (
            <Button
              handleState={handleOpenDropDown}
              arialLabel="DropDown Button"
            >
              <MenuHamburguer />
            </Button>
          ) : (
            <Button handleState={handleOpenDropDown} arialLabel="Close Button">
              <Close />
            </Button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
