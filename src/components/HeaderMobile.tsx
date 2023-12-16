'use client'

import { useContext } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'
import MenuHamburger from '@/svgs/MenuHamburger'
import Close from '@/svgs/Close'
import Modal from './Modal'
import Links from '@/svgs/Links'
import { Context } from '@/contexts/context'

const HeaderMobile = () => {
  const { openMenu, openModal, handleOpenMenu, handleOpenModal } =
    useContext(Context)

  return (
    <>
      {openMenu ? <Menu /> : null}
      {openModal ? <Modal /> : null}
      <header className="fixed top-0 flex h-20 w-full flex-row items-center justify-between bg-black px-5 pt-2 sm:px-8 lg:hidden">
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

        <div className="flex items-center gap-2">
          <Button handleState={handleOpenModal}>
            <Links />
          </Button>

          {!openMenu ? (
            <Button handleState={handleOpenMenu}>
              <MenuHamburger />
            </Button>
          ) : (
            <Button handleState={handleOpenMenu}>
              <Close />
            </Button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
