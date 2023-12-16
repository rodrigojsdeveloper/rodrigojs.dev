'use client'

import { usePathname } from 'next/navigation'
import CustomLink from './CustomLink'
import Copyright from './Copyright'
import SubTitle from './SubTitle'
import i from '@/assets/i.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Line from './Line'
import Button from './Button'
import Home from '@/svgs/Home'
import About from '@/svgs/About'
import Contact from '@/svgs/Contact'
import Experiences from '@/svgs/Experiences'
import Projects from '@/svgs/Projects'
import { useContext } from 'react'
import ModalBackground from './ModalBackground'
import Modal from './Modal'
import Links from '@/svgs/Links'
import { Context } from '@/contexts/context'

const Header = () => {
  const { openModal, handleOpenModal } = useContext(Context)
  const pathname = usePathname()

  return (
    <>
      {openModal ? (
        <ModalBackground>
          <Modal />
        </ModalBackground>
      ) : null}
      <aside className="sticky top-0 flex h-104 w-full max-w-230 flex-col gap-y-3 pt-8 max-lg:hidden">
        <figure className="flex h-20 w-20 items-center justify-center rounded-full duration-300 ease-in-out">
          <Image
            src={i}
            priority
            alt="Rodrigo Silva"
            className="h-20 w-20 rounded-full border border-solid border-line object-cover"
          />
        </figure>

        <div className="w-full">
          <SubTitle title="Rodrigo Silva" />
          <Link
            target="_blank"
            href="https://github.com/rodrigojsdeveloper"
            className="text-sm font-medium text-color-paragraphy active:opacity-50"
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
                ? 'bg-link-active text-white'
                : 'bg-transparent text-color-paragraphy'
            }
          />
          <CustomLink
            href="about"
            Icon={<About pathname={pathname} />}
            text="About"
            activeLink={
              pathname === '/about'
                ? 'bg-link-active text-white'
                : 'bg-transparent text-color-paragraphy'
            }
          />
          <CustomLink
            href="projects"
            Icon={<Projects pathname={pathname} />}
            text="Projects"
            activeLink={
              pathname === '/projects'
                ? 'bg-link-active text-white'
                : 'bg-transparent text-color-paragraphy'
            }
          />
          <CustomLink
            href="contact"
            Icon={<Contact pathname={pathname} />}
            text="Contact"
            activeLink={
              pathname === '/contact'
                ? 'bg-link-active text-white'
                : 'bg-transparent text-color-paragraphy'
            }
          />
          <CustomLink
            href="experiences"
            Icon={<Experiences pathname={pathname} />}
            text="Experiences"
            activeLink={
              pathname === '/experiences'
                ? 'bg-link-active text-white'
                : 'bg-transparent text-color-paragraphy'
            }
          />
        </nav>

        <Line />
        <div className="flex items-center justify-between">
          <Copyright />
          <Button handleState={handleOpenModal}>
            <Links />
          </Button>
        </div>
      </aside>
    </>
  )
}

export default Header
