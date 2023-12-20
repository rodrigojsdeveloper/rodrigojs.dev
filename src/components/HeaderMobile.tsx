'use client'

import { useContext } from 'react'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Button from './Button'
import Modal from './Modal'
import { Context } from '@/contexts/context'

const HeaderMobile = () => {
  const { openMenu, openModal, handleOpenMenu, handleOpenModal } =
    useContext(Context)

  return (
    <>
      {openMenu ? <Menu /> : null}
      {openModal ? <Modal /> : null}
      <header className="fixed top-0 z-10 flex h-20 w-full flex-row items-center justify-between bg-black px-6 pt-2 sm:px-8 lg:hidden">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8C8C8C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 duration-300 group-hover:stroke-white"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
          </Button>

          {!openMenu ? (
            <Button handleState={handleOpenMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#8C8C8C"
                  fillRule="evenodd"
                  className="h-5 w-5 duration-300 group-hover:fill-white"
                  d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          ) : (
            <Button handleState={handleOpenMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#8C8C8C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m7 7l10 10M7 17L17 7"
                  className="h-5 w-5 duration-300 group-hover:stroke-white"
                />
              </svg>
            </Button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderMobile
