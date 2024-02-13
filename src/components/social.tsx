import { SocialProps } from '@/interfaces'
import Link from 'next/link'

export const Social = ({ title, link }: SocialProps) => {
  return (
    <li className="group cursor-pointer text-sm font-medium text-foreground-muted">
      <Link
        target="_blank"
        href={link}
        className="decoration-[0.094rem] underline-offset-4 group-focus-within:text-foreground group-focus-within:underline group-hover:text-foreground group-hover:underline"
      >
        {title}
      </Link>
    </li>
  )
}
