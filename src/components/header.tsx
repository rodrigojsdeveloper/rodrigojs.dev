'use client'

import { usePathname } from 'next/navigation'
import author from '@/assets/author.jpg'
import { LINKS } from '@/data/links'
import { CustomLink } from './custom-link'
import { Copyright } from './copyright'
import { SubTitle } from './subtitle'
import { Image } from './image'
import { Line } from './line'
import { translate } from '@/i18n'

export const Header = () => {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-[30rem] w-full max-w-[14.375rem] flex-col gap-y-3 pt-8 lg:flex">
      <Image
        src={author}
        alt="Rodrigo Silva"
        zoomHover
        className="size-20 rounded-full"
      />
      <div>
        <SubTitle title="Rodrigo Silva" />
        <p className="text-sm text-foreground-muted">
          {translate('header.office')}
        </p>
      </div>
      <nav className="flex flex-col gap-1">
        {LINKS.website.map((link, index) => (
          <CustomLink
            key={`website ${index}`}
            href={link.href}
            Icon={<link.icon size={22} strokeWidth={2} />}
            text={link.title}
            activeLink={
              pathname === `/${link.href}`
                ? 'border-border text-foreground'
                : 'border-transparent text-foreground-muted'
            }
            isLink
          />
        ))}
      </nav>
      <Line />
      <Copyright />
    </aside>
  )
}
