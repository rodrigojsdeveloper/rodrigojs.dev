'use client'
import { useState } from 'react'
import my from '@/assets/my.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal'

const HeaderMobile = () => {
  const [openModa, setOpenModal] = useState<boolean>(false)

  return (
    <>
      {openModa ? <Modal /> : null}
      <header className="fixed top-0 hidden h-81 w-full flex-row items-center justify-between border-b border-solid border-gray-6 bg-backgroundHeader px-8 pt-2 backdrop-blur-sm max-lg:flex">
        <Link
          href="/"
          className="-ml-1 mb-2 flex h-45 w-full max-w-45 items-center justify-center rounded-full duration-300 ease-in-out"
        >
          <Image
            src={my}
            alt="Rodrigo Silva"
            className="h-45 w-full max-w-45 rounded-full border border-solid border-gray-4 object-cover"
          />
        </Link>

        {!openModa ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setOpenModal(true)}
            className="cursor-pointer"
          >
            <path
              fill="#a3a3a3"
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
            onClick={() => setOpenModal(false)}
            className="cursor-pointer"
          >
            <path
              fill="none"
              stroke="#d4d4d4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 7l10 10M7 17L17 7"
            />
          </svg>
        )}
      </header>
    </>
  )
}

export default HeaderMobile
