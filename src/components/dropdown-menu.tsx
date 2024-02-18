'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/data/links'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { cn } from '@/utils/cn'
import { translate } from '@/i18n'

export const DropDownMenu = () => {
  const pathname = usePathname()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label={translate('links.arial_label.drop_down')}
          className="group flex items-center justify-center rounded-md p-1 text-foreground-muted focus-visible:ring-1 focus-visible:ring-border"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="fixed -right-4 z-20 min-w-[8.75rem] rounded-radius border border-solid border-border bg-background shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
        >
          {LINKS.mobile_website.map((link, index) => (
            <DropdownMenu.Item
              className={cn(
                'row group flex w-full select-none items-center gap-2 px-2 py-2.5 text-sm',
                pathname === `/${link.href}`
                  ? 'text-foreground'
                  : 'bg-transparent text-foreground-muted',
              )}
              key={`website ${index}`}
              asChild
            >
              <Link href={link.href} className="flex flex-row gap-2">
                <link.icon size={22} strokeWidth={2} /> <p>{link.title}</p>
              </Link>
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="absolute right-[3.1rem] fill-border" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
