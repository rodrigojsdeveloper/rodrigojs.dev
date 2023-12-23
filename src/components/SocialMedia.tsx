import { IMedia } from '@/interfaces'
import Link from 'next/link'

const SocialMedia = ({ media }: IMedia) => {
  return (
    <li className="group w-full max-w-fit cursor-pointer select-none rounded-def text-sm font-medium text-gray-100 hover:bg-gray-200">
      <Link
        target="_blank"
        href={media.link}
        className="group-hover:text-primary flex flex-row items-center gap-1.5 rounded-def border border-solid border-gray-200 px-2.5 py-2"
      >
        {media.svg}
        {media.name}
      </Link>
    </li>
  )
}

export default SocialMedia
