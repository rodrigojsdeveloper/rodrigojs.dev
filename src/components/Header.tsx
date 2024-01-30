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
import { Menu } from '@/svgs'
import Modal from './Modal'
import { Context } from '@/contexts/context'
import { LINKS } from '@/utils/socials'

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
          {LINKS.website.map((link, index) => (
            <CustomLink
              key={`website ${index}`}
              href={link.href}
              Icon={<link.svg pathname={pathname} />}
              text={link.title}
              activeLink={
                pathname === `/${link.href}`
                  ? 'linkSelected text-primary'
                  : 'border-transparent text-gray-100'
              }
              isLink
            />
          ))}
        </nav>

        <Line />
        <div className="flex items-center justify-between">
          <Copyright />
          <Button handleState={handleOpenModal} arialLabel="Settings Button">
            <Menu />
          </Button>
        </div>
      </aside>
    </>
  )
}

export default Header
