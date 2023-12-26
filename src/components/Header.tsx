'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import CustomLink from './CustomLink'
import Copyright from './Copyright'
import SubTitle from './SubTitle'
import author from '@/assets/author.jpg'
import Image from '@/components/Image'
import Link from 'next/link'
import Line from './Line'
import Button from './Button'
import Home from '@/svgs/Home'
import About from '@/svgs/About'
import Contact from '@/svgs/Contact'
import Projects from '@/svgs/Projects'
import Modal from './Modal'
import { Context } from '@/contexts/context'

const Header = () => {
  const { openModal, handleOpenModal } = useContext(Context)
  const pathname = usePathname()

  return (
    <>
      {openModal ? <Modal /> : null}
      <aside className="sticky top-0 hidden h-[30rem] w-full max-w-[14.375rem] flex-col gap-y-3 pt-8 lg:flex">
        <Image
          src={author}
          alt="Rodrigo Silva"
          zoomHover={true}
          className="size-20 rounded-full"
        />

        <div className="w-full">
          <SubTitle title="Rodrigo Silva" />
          <Link
            target="_blank"
            href="https://github.com/rodrigojsdeveloper"
            className="select-none text-sm font-medium text-gray-100 active:opacity-50"
          >
            @rodrigojsdeveloper
          </Link>
        </div>

        <Line />

        <nav className="flex flex-col gap-1">
          <CustomLink
            href=""
            Icon={<Home pathname={pathname} />}
            text="Início"
            activeLink={
              pathname === '/'
                ? 'bg-active text-primary'
                : 'bg-transparent text-gray-100'
            }
          />
          <CustomLink
            href="about"
            Icon={<About pathname={pathname} />}
            text="Sobre"
            activeLink={
              pathname === '/about'
                ? 'bg-active text-primary'
                : 'bg-transparent text-gray-100'
            }
          />
          <CustomLink
            href="projects"
            Icon={<Projects pathname={pathname} />}
            text="Projetos"
            activeLink={
              pathname === '/projects'
                ? 'bg-active text-primary'
                : 'bg-transparent text-gray-100'
            }
          />
          <CustomLink
            href="contact"
            Icon={<Contact pathname={pathname} />}
            text="Contato"
            activeLink={
              pathname === '/contact'
                ? 'bg-active text-primary'
                : 'bg-transparent text-gray-100'
            }
          />
        </nav>

        <Line />
        <div className="flex items-center justify-between">
          <Copyright />
          <Button handleState={handleOpenModal} arialLabel="Settings Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
            >
              <path
                d="M5.25 12.4688C6.33731 12.4688 7.21875 11.5873 7.21875 10.5C7.21875 9.41269 6.33731 8.53125 5.25 8.53125C4.16269 8.53125 3.28125 9.41269 3.28125 10.5C3.28125 11.5873 4.16269 12.4688 5.25 12.4688Z"
                stroke="#888888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
              />
              <path
                d="M15.75 6.5625C16.8373 6.5625 17.7188 5.68106 17.7188 4.59375C17.7188 3.50644 16.8373 2.625 15.75 2.625C14.6627 2.625 13.7812 3.50644 13.7812 4.59375C13.7812 5.68106 14.6627 6.5625 15.75 6.5625Z"
                stroke="#888888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
              />
              <path
                d="M15.75 18.375C16.8373 18.375 17.7188 17.4936 17.7188 16.4062C17.7188 15.3189 16.8373 14.4375 15.75 14.4375C14.6627 14.4375 13.7812 15.3189 13.7812 16.4062C13.7812 17.4936 14.6627 18.375 15.75 18.375Z"
                stroke="#888888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
              />
              <path
                d="M6.9657 11.4651L14.0343 15.4412M14.0343 5.55885L6.9657 9.5349"
                stroke="#888888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
              />
            </svg>
          </Button>
        </div>
      </aside>
    </>
  )
}

export default Header
