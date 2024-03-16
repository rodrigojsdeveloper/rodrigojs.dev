import Link from 'next/link'
import { ProjectProps } from '@/interfaces'
import { Image } from '@/components/image'
import { translate } from '@/i18n'

export const Project = ({ img, title, link }: ProjectProps) => {
  return (
    <li className="relative list-none overflow-hidden rounded-2xl border border-solid border-border focus-within:ring-1 focus-within:ring-border ">
      <Link href={link} target="_blank">
        <Image
          src={img}
          alt={`${translate('projects.alt')} ${title}`}
          className="max-h-[24.373rem]"
        />
        <div className="absolute bottom-2 left-3 z-[1] flex w-full">
          <h2 className="font-light text-zinc-50">{title}</h2>
        </div>
      </Link>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/80 to-transparent" />
    </li>
  )
}
