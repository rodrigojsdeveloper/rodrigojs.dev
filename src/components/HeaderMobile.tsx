'use client'

import { useState } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'
import MenuHamburger from '@/svgs/MenuHamburger'
import Close from '@/svgs/Close'

const HeaderMobile = () => {
  const [openModa, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      {openModa ? <Menu /> : null}
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
          <Button />

          {!openModa ? (
            <MenuHamburger setOpenMenu={setOpenMenu} />
          ) : (
            <Close setOpenMenu={setOpenMenu} />
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
