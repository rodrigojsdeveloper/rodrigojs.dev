'use client'

import { useState } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'
import MenuHamburger from '@/svgs/MenuHamburger'
import Close from '@/svgs/Close'
import Modal from './Modal'
import ModalBackground from './ModalBackground'
import Links from '@/svgs/Links'

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      {openMenu ? <Menu /> : null}
      {openModal ? (
        <ModalBackground>
          <Modal handleState={handleOpenModal} />
        </ModalBackground>
      ) : null}
      <header className="fixed top-0 hidden h-20 w-full flex-row items-center justify-between bg-black px-8 pt-2 max-lg:flex max-sm:px-5">
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
