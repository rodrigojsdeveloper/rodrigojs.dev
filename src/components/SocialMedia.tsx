import { IMedia } from '@/interfaces'
import Link from 'next/link'

const SocialMedia = ({ media }: IMedia) => {
  return (
    <li className="group h-11 w-11 cursor-pointer select-none rounded-def text-sm font-medium text-gray-100 hover:bg-gray-200">
      <Link
        target="_blank"
        href={media.link}
        className="flex h-full w-full flex-row items-center justify-center gap-1.5 rounded-def border border-solid border-gray-200 px-2.5 py-2 group-hover:text-primary"
      >
        {media.svg}
      </Link>
    </li>
  )
}

export default SocialMedia
