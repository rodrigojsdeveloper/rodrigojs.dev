import { ISocial } from '@/interfaces'
import Link from 'next/link'

const SocialMedia = ({ social }: ISocial) => {
  return (
    <li className="group cursor-pointer pr-2.5 text-sm font-medium text-gray-100">
      <Link
        target="_blank"
        href={social.link}
        className="decoration-[0.094rem] underline-offset-4 group-hover:text-primary group-hover:underline"
      >
        {social.name}
      </Link>
    </li>
  )
}

export default SocialMedia
