'use client'

import { useContext } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'
import Modal from './Modal'
import { Context } from '@/contexts/context'
import x from '@/assets/others/x.svg'
import menu from '@/assets/others/menu.svg'
import settings from '@/assets/others/settings.svg'

const HeaderMobile = () => {
  const { openMenu, openModal, handleOpenMenu, handleOpenModal } =
    useContext(Context)

  return (
    <>
      {openMenu ? <Menu /> : null}
      {openModal ? <Modal /> : null}
      <header className="fixed top-0 z-10 flex h-20 w-full flex-row items-center justify-between bg-black px-5 pt-2 sm:px-8 lg:hidden">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full ease-in-out"
        >
          <Image
            src={i}
            priority
            alt="Rodrigo Silva"
            className="h-10 w-10 rounded-full border border-solid border-line object-cover"
          />
        </Link>

        <div className="flex items-center gap-1">
          <Button handleState={handleOpenModal}>
            <Image src={settings} alt="settings" priority />
          </Button>

          {!openMenu ? (
            <Button handleState={handleOpenMenu}>
              <Image src={menu} alt="menu" priority />
            </Button>
          ) : (
            <Button handleState={handleOpenMenu}>
              <Image src={x} alt="close" priority />
            </Button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
