import { ICustomLink } from '@/interfaces'
import Link from 'next/link'

const CustomLink = ({
  Icon,
  text,
  href,
  activeLink,
  onClick,
  style,
  externalLink,
  target,
}: ICustomLink) => {
  return (
    <Link
      href={externalLink ? href : `/${href}`}
      onClick={onClick}
      suppressHydrationWarning={true}
      target={target}
      className={`row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2 py-2 text-sm ${activeLink} ${style} border border-solid border-transparent hover:border-hover`}
    >
      {Icon} {text}
    </Link>
  )
}

export default CustomLink
