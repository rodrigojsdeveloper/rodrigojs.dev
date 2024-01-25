'use client'

import { useContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Context } from '@/contexts/context'
import CustomLink from './CustomLink'
import { About, Contact, Projects } from '@/svgs'

const DropDown = () => {
  const { handleOpenDropDown } = useContext(Context)

  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutsideDropDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleOpenDropDown()
      }
    }

    document.addEventListener('mousedown', handleClickOutsideDropDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropDown)
    }
  }, [handleOpenDropDown])

  return (
    <nav
      ref={menuRef}
      className="fixed right-6 top-16 z-20 w-full max-w-[8.75rem] animate-down rounded-def border border-solid border-gray-200 bg-black"
    >
      <CustomLink
        href="about"
        Icon={<About pathname={pathname} />}
        text="Sobre"
        activeLink={
          pathname === '/about'
            ? 'text-primary'
            : 'bg-transparent text-gray-100'
        }
        style="rounded-b-none border-none"
        onClick={handleOpenDropDown}
      />
      <CustomLink
        href="projects"
        Icon={<Projects pathname={pathname} />}
        text="Projetos"
        activeLink={
          pathname === '/projects'
            ? 'text-primary'
            : 'bg-transparent text-gray-100'
        }
        style="rounded-none border-none"
        onClick={handleOpenDropDown}
      />
      <CustomLink
        href="contact"
        Icon={<Contact pathname={pathname} />}
        text="Contato"
        activeLink={
          pathname === '/contact'
            ? 'text-primary'
            : 'bg-transparent text-gray-100'
        }
        style="rounded-t-none border-none"
        onClick={handleOpenDropDown}
      />
    </nav>
  )
}

export default DropDown
