'use client'

import { useState } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => setOpenMenu(true)}
              className="cursor-pointer"
            >
              <path
                fill="#8C8C8C"
                fillRule="evenodd"
                d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer"
            >
              <path
                fill="none"
                stroke="#8C8C8C"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
