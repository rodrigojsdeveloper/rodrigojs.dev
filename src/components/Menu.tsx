'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import CustomLink from './CustomLink'
import Contact from '@/svgs/Contact'
import Projects from '@/svgs/Projects'
import About from '@/svgs/About'
import { Context } from '@/contexts/context'

const Menu = () => {
  const { handleOpenMenu } = useContext(Context)

  const pathname = usePathname()

  return (
    <nav className="fixed right-6 top-16 z-20 w-full max-w-[8.75rem] animate-down rounded-def border border-solid border-gray-200 bg-black">
      <CustomLink
        href="about"
        Icon={<About pathname={pathname} />}
        text="Sobre"
        activeLink={
          pathname === '/about'
            ? 'bg-active text-primary'
            : 'bg-transparent text-gray-100'
        }
        style="rounded-b-none"
        onClick={handleOpenMenu}
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
        style="rounded-none"
        onClick={handleOpenMenu}
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
        style="rounded-t-none"
        onClick={handleOpenMenu}
      />
    </nav>
  )
}

export default Menu
