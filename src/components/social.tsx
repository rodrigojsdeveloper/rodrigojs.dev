import { ISocial } from '@/interfaces'
import Link from 'next/link'

export const Social = ({ social }: ISocial) => {
  return (
    <li className="group cursor-pointer text-sm font-medium text-muted-foreground">
      <Link
        target="_blank"
        href={social.link}
        className="decoration-[0.094rem] underline-offset-4 group-hover:text-foreground group-hover:underline"
      >
        {social.title}
      </Link>
    </li>
  )
}
