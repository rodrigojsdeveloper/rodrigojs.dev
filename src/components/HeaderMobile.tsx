'use client'

import { useContext } from 'react'
import author from '@/assets/author.jpg'
import Image from '@/components/Image'
import Link from 'next/link'
import DropDown from './DropDown'
import Button from './Button'
import Modal from './Modal'
import { Context } from '@/contexts/context'
import { X, Menu, MoreHorizontal } from 'lucide-react'

const HeaderMobile = () => {
  const { openDropDown, openModal, handleOpenDropDown, handleOpenModal } =
    useContext(Context)

  return (
    <>
      {openDropDown ? <DropDown /> : null}
      {openModal ? <Modal /> : null}
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
          <Button handleState={handleOpenModal} arialLabel="Settings Button">
            <MoreHorizontal size={20} color="var(--gray-100)" />
          </Button>

          {!openDropDown ? (
            <Button
              handleState={handleOpenDropDown}
              arialLabel="DropDown Button"
            >
              <Menu size={20} strokeWidth={1.5} color="var(--gray-100)" />
            </Button>
          ) : (
            <Button handleState={handleOpenDropDown} arialLabel="Close Button">
              <X size={20} strokeWidth={1.5} color="var(--gray-100)" />
            </Button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
