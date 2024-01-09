'use client'

import { useContext } from 'react'
import author from '@/assets/author.jpg'
import Image from '@/components/Image'
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
          className="flex items-center justify-center rounded-full"
        >
          <Image
            src={author}
            alt="Rodrigo Silva"
            zoomHover={true}
            className="h-11 w-11 rounded-full"
          />
        </Link>

        <div className="flex items-center gap-1">
          <Button handleState={handleOpenModal} arialLabel="Settings Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 23 23"
              fill="none"
              stroke="#888888"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
          </Button>

          {!openMenu ? (
            <Button handleState={handleOpenMenu} arialLabel="Menu Button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
                  fill="#888888"
                  className="duration-300 group-hover:fill-primary group-active:fill-primary"
                />
              </svg>
            </Button>
          ) : (
            <Button handleState={handleOpenMenu} arialLabel="Close Button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.2807 18.2194C19.3504 18.2891 19.4056 18.3718 19.4433 18.4628C19.4811 18.5539 19.5005 18.6515 19.5005 18.75C19.5005 18.8485 19.4811 18.9461 19.4433 19.0372C19.4056 19.1282 19.3504 19.2109 19.2807 19.2806C19.211 19.3503 19.1283 19.4056 19.0372 19.4433C18.9462 19.481 18.8486 19.5004 18.7501 19.5004C18.6515 19.5004 18.5539 19.481 18.4629 19.4433C18.3718 19.4056 18.2891 19.3503 18.2194 19.2806L12.0001 13.0603L5.78068 19.2806C5.63995 19.4214 5.44907 19.5004 5.25005 19.5004C5.05103 19.5004 4.86016 19.4214 4.71943 19.2806C4.5787 19.1399 4.49963 18.949 4.49963 18.75C4.49963 18.551 4.5787 18.3601 4.71943 18.2194L10.9397 12L4.71943 5.78062C4.5787 5.63989 4.49963 5.44902 4.49963 5.25C4.49963 5.05097 4.5787 4.8601 4.71943 4.71937C4.86016 4.57864 5.05103 4.49958 5.25005 4.49958C5.44907 4.49958 5.63995 4.57864 5.78068 4.71937L12.0001 10.9397L18.2194 4.71937C18.3602 4.57864 18.551 4.49958 18.7501 4.49958C18.9491 4.49958 19.1399 4.57864 19.2807 4.71937C19.4214 4.8601 19.5005 5.05097 19.5005 5.25C19.5005 5.44902 19.4214 5.63989 19.2807 5.78062L13.0604 12L19.2807 18.2194Z"
                  fill="#888888"
                  className="duration-300 group-hover:fill-primary group-active:fill-primary"
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
