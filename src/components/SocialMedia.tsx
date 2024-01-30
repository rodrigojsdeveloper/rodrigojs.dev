import { ISocial } from '@/interfaces'
import Link from 'next/link'

const SocialMedia = ({ social }: ISocial) => {
  return (
    <li className="group cursor-pointer select-none text-sm font-medium text-gray-100 duration-100">
      <Link
        target="_blank"
        href={social.link}
        className="pr-2.5 underline-offset-4 group-hover:text-secondary group-hover:underline"
      >
        {social.name}
      </Link>
    </li>
  )
}

export default SocialMedia
