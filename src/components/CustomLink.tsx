import { ICustomLink } from '@/interfaces'
import Link from 'next/link'

const CustomLink = ({
  Icon,
  text,
  href,
  activeLink,
  onClick,
  style,
}: ICustomLink) => {
  return (
    <Link
      href={'/' + href}
      onClick={onClick}
      suppressHydrationWarning={true}
      className={`row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2.5 py-2 text-sm ${activeLink} ${style} hover:text-primary hover:bg-hover active:bg-active`}
    >
      {Icon} {text}
    </Link>
  )
}

export default CustomLink
