import Link from 'next/link'
import { CustomLinkProps } from '@/interfaces'
import { cn } from '@/utils/cn'

export const CustomLink = ({
  Icon,
  text,
  href,
  activeLink,
  onClick,
  className,
  externalLink,
  target,
  isLink,
}: CustomLinkProps) => {
  return isLink ? (
    <Link
      href={externalLink ? href : `/${href}`}
      onClick={onClick}
      suppressHydrationWarning={true}
      target={target}
      className={cn(
        'row group flex w-full select-none items-center gap-2 rounded-radius border border-solid border-transparent px-2 py-2.5 text-sm text-foreground-muted hover:border-border focus-visible:border-border',
        activeLink,
        className,
      )}
    >
      {Icon} {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="row flex w-full items-center gap-2 rounded-radius border border-solid border-transparent px-2 py-2.5 text-sm text-foreground-muted/50 hover:border-border/50 focus-visible:border-border/50"
    >
      {Icon} {text}
    </button>
  )
}
