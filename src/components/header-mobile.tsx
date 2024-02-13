'use client'

import author from '@/assets/author.jpg'
import { Image } from '@/components/image'
import { DropDownMenu } from './dropdown-menu'
import { Modal } from './modal'
import Link from 'next/link'

export const HeaderMobile = () => {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full flex-row items-center justify-between bg-background px-6 pt-2 sm:px-8 lg:hidden">
      <Link href="/" className="flex items-center justify-center rounded-full">
        <Image
          src={author}
          alt="Rodrigo Silva"
          className="h-11 w-11 rounded-full"
        />
      </Link>

      <div className="flex items-center gap-1">
        <Modal />
        <DropDownMenu />
      </div>
    </header>
  )
}
