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
        <div className="flex h-[6.25rem] w-[6.25rem] items-center justify-center overflow-hidden rounded-full">
          <Image src={author} alt="Rodrigo Silva" zoomHover={true} />
        </div>

        <div className="w-full">
          <SubTitle title="Rodrigo Silva" />
          <Link
            target="_blank"
            href="https://github.com/rodrigojsdeveloper"
            className="select-none text-sm font-medium text-color-paragraph active:opacity-50"
          >
            @rodrigojsdeveloper
          </Link>
        </div>

        <Line />

        <nav className="flex flex-col gap-1">
          <CustomLink
            href=""
            Icon={<Home pathname={pathname} />}
            text="Home"
            activeLink={
              pathname === '/'
                ? 'bg-link-active text-zinc-50'
                : 'bg-transparent text-color-paragraph'
            }
          />
          <CustomLink
            href="about"
            Icon={<About pathname={pathname} />}
            text="About"
            activeLink={
              pathname === '/about'
                ? 'bg-link-active text-zinc-50'
                : 'bg-transparent text-color-paragraph'
            }
          />
          <CustomLink
            href="projects"
            Icon={<Projects pathname={pathname} />}
            text="Projects"
            activeLink={
              pathname === '/projects'
                ? 'bg-link-active text-zinc-50'
                : 'bg-transparent text-color-paragraph'
            }
          />
          <CustomLink
            href="contact"
            Icon={<Contact pathname={pathname} />}
            text="Contact"
            activeLink={
              pathname === '/contact'
                ? 'bg-link-active text-zinc-50'
                : 'bg-transparent text-color-paragraph'
            }
          />
        </nav>

        <Line />
        <div className="flex items-center justify-between">
          <Copyright />
          <Button handleState={handleOpenModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 duration-300 group-hover:stroke-zinc-50"
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
