import Link from 'next/link'
import { SocialProps } from '@/interfaces'

export const Social = ({ title, link }: SocialProps) => {
  return (
    <li className="group cursor-pointer text-sm text-foreground-muted">
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
