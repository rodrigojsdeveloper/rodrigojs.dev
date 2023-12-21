import { IMedia } from '@/interfaces'
import Link from 'next/link'

const SocialMedia = ({ media }: IMedia) => {
  return (
    <li className="group w-full max-w-fit cursor-pointer select-none rounded-def text-sm font-medium text-color-paragraphy hover:bg-line">
      <Link
        target="_blank"
        href={media.link}
        className="flex flex-row items-center gap-1.5 rounded-def border border-solid border-line px-2.5 py-2 group-hover:text-zinc-50"
      >
        {media.svg}
        {media.name}
      </Link>
    </li>
  )
}

export default SocialMedia
