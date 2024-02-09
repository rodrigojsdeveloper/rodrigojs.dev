'use client'

import { useContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Context } from '@/contexts/context'
import { CustomLink } from './custom-link'
import { LINKS } from '@/utils/links'

export const DropDown = () => {
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
      className="fixed right-6 top-16 z-20 w-full max-w-[8.75rem] animate-down rounded-radius border border-solid border-border bg-background"
    >
      {LINKS.mobile_website.map((link, index) => (
        <CustomLink
          key={`website ${index}`}
          href={link.href}
          Icon={<link.svg size={22} strokeWidth={2} />}
          text={link.title}
          onClick={handleOpenDropDown}
          activeLink={
            pathname === `/${link.href}`
              ? 'text-foreground'
              : 'bg-transparent text-muted-foreground'
          }
          className="border-none"
          isLink
        />
      ))}
    </nav>
  )
}
