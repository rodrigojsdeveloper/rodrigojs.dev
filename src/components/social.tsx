import Link from 'next/link'
import { SocialProps } from '@/interfaces'

export const Social = ({ title, link }: SocialProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative overflow-hidden"
    >
      <span className="invisible">{title}</span>
      <span className="absolute left-0 top-0 cursor-pointer text-sm text-foreground-muted transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full sm:text-base">
        {title}
      </span>
      <span className="absolute left-0 top-0 translate-y-full text-sm text-foreground-muted transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0 sm:text-base">
        {title}
      </span>
    </Link>
  )
}
