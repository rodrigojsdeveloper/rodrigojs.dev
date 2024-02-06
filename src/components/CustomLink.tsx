import { ICustomLink } from '@/interfaces'
import cn from '@/utils/cn'
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
      className={cn(
        'row group flex w-full select-none items-center gap-2 rounded-radius border border-solid border-transparent px-2 py-2.5 text-sm hover:border-border',
        activeLink,
        className,
      )}
    >
      {Icon} {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="row group flex w-full items-center gap-2 rounded-radius border border-solid border-transparent px-2 py-2.5 text-sm font-light text-muted-foreground hover:border-border"
    >
      {Icon} {text}
    </button>
  )
}

export default CustomLink
