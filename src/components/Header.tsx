'use client'

import { useContext, useEffect } from 'react'
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

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = 'hidden'
    } else document.body.style.overflowY = 'auto'
  }, [openModal])

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
              width="20"
              height="20"
              viewBox="0 0 22 24"
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
        </div>
      </aside>
    </>
  )
}

export default Header
