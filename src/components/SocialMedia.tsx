import { ILink } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const SocialMedia = ({ link }: ILink) => {
  return (
    <li className="w-full max-w-fit rounded-def border border-solid border-neutral-800 px-2.5 py-2 text-sm font-medium text-gray-1 hover:bg-neutral-800">
      <Link
        target="_blank"
        href={link.link}
        className="flex flex-row items-center gap-1.5"
      >
        <Image src={link.img} alt={`${link.name} social media`} priority />
        {link.name}
      </Link>
    </li>
  )
}

export default SocialMedia
