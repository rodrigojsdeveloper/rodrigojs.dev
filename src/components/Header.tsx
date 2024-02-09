'use client'

import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CustomLink } from './custom-link'
import { Copyright } from './copyright'
import { SubTitle } from './subtitle'
import author from '@/assets/author.jpg'
import { Image } from '@/components/image'
import Link from 'next/link'
import { Line } from './line'
import { Button } from './button'
import { Modal } from './modal'
import { Context } from '@/contexts/context'
import { LINKS } from '@/utils/links'
import { MoreHorizontal } from 'lucide-react'
import { translate } from '@/i18n'

export const Header = () => {
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

        <div>
          <SubTitle title="Rodrigo Silva" />
          <Link
            target="_blank"
            href="https://github.com/rodrigojsdeveloper"
            className="select-none text-sm font-medium text-muted-foreground active:opacity-50"
          >
            &#x00040;rodrigojsdeveloper
          </Link>
        </div>

        <Line />

        <nav className="flex flex-col gap-1">
          {LINKS.website.map((link, index) => (
            <CustomLink
              key={`website ${index}`}
              href={link.href}
              Icon={<link.svg size={22} strokeWidth={2} />}
              text={link.title}
              activeLink={
                pathname === `/${link.href}`
                  ? 'linkSelected text-foreground'
                  : 'border-transparent text-muted-foreground'
              }
              isLink
            />
          ))}
        </nav>

        <Line />
        <div className="flex items-center justify-between">
          <Copyright />
          <Button
            handleState={handleOpenModal}
            arialLabel={translate('links.arial_label.settings')}
          >
            <MoreHorizontal size={20} className="stroke-muted-foreground" />
          </Button>
        </div>
      </aside>
    </>
  )
}
