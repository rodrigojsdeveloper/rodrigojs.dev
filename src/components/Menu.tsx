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
    <nav className="fixed right-6 top-16 z-20 w-full max-w-[8.75rem] animate-down rounded-def border border-solid border-line bg-black">
      <CustomLink
        href="about"
        Icon={<About pathname={pathname} />}
        text="About"
        activeLink={
          pathname === '/about'
            ? 'bg-link-active text-zinc-50'
            : 'bg-transparent text-color-paragraph'
        }
        style="rounded-b-none"
        onClick={handleOpenMenu}
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
        style="rounded-none"
        onClick={handleOpenMenu}
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
        style="rounded-none"
        onClick={handleOpenMenu}
      />
    </nav>
  )
}

export default Menu
