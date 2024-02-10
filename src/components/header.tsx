'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import author from '@/assets/author.jpg'
import { LINKS } from '@/utils/links'
import { CustomLink } from './custom-link'
import { Copyright } from './copyright'
import { SubTitle } from './subtitle'
import { Image } from './image'
import { Line } from './line'
import { Modal } from './modal'

export const Header = () => {
  const pathname = usePathname()

  return (
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
            Icon={<link.icon size={22} strokeWidth={2} />}
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
        <Modal />
      </div>
    </aside>
  )
}
