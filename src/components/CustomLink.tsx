import { ICustomLink } from '@/interfaces'
import Link from 'next/link'

const CustomLink = ({
  Icon,
  text,
  href,
  activeLink,
  onClick,
  className,
  externalLink,
  target,
  isLink,
}: ICustomLink) => {
  return isLink ? (
    <Link
      href={externalLink ? href : `/${href}`}
      onClick={onClick}
      suppressHydrationWarning={true}
      target={target}
      className={`row group flex h-10 w-full select-none items-center gap-2 rounded-def px-2 py-2 text-sm ${activeLink} ${className} border border-solid border-transparent hover:border-border`}
    >
      {Icon} {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="row group flex h-10 w-full items-center gap-2 rounded-def border border-solid border-transparent px-2 py-2 text-sm font-light text-muted-foreground hover:border-border"
    >
      {Icon} {text}
    </button>
  )
}

export default CustomLink
