import { ILink } from '@/interfaces'
import Link from 'next/link'

const CustomLink = ({ Icon, text, href, activeLink, onClick }: ILink) => {
  return (
    <Link
      href={'/' + href}
      onClick={onClick}
      suppressHydrationWarning={true}
      className={`row flex h-10 w-full items-center gap-2 rounded-def px-2.5 py-2 text-sm ${activeLink} hover:bg-link-1 active:opacity-50`}
    >
      {Icon} {text}
    </Link>
  )
}

export default CustomLink
