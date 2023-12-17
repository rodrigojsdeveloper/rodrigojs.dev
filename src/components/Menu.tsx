'use client'

import { usePathname } from 'next/navigation'
import CustomLink from './CustomLink'
import Experiences from '@/svgs/Experiences'
import Contact from '@/svgs/Contact'
import Projects from '@/svgs/Projects'
import About from '@/svgs/About'

const Menu = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed right-6 top-16 z-20 w-full max-w-140 animate-down rounded-def border border-solid border-line bg-black">
      <CustomLink
        href="about"
        Icon={<About pathname={pathname} />}
        text="About"
        activeLink={
          pathname === '/about'
            ? 'bg-link-active text-white'
            : 'bg-transparent text-color-paragraphy'
        }
        style="rounded-b-none"
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
        style="rounded-none"
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
        style="rounded-none"
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
        style="rounded-t-none"
      />
    </nav>
  )
}

export default Menu
