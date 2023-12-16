import { IMedia } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const SocialMedia = ({ media }: IMedia) => {
  return (
    <li className="w-full max-w-fit cursor-pointer rounded-def border border-solid border-line px-2.5 py-2 text-sm font-medium text-color-paragraphy hover:bg-line">
      <Link
        target="_blank"
        href={media.link}
        className="flex flex-row items-center gap-1.5"
      >
        <Image src={media.img} alt={`${media.name} social media`} priority />
        {media.name}
      </Link>
    </li>
  )
}

export default SocialMedia
