import { ProjectProps } from '@/interfaces'
import { Image } from '@/components/image'
import { translate } from '@/i18n'
import Link from 'next/link'

export const Project = ({ img, title, link }: ProjectProps) => {
  return (
    <li className="relative list-none overflow-hidden rounded-radius border border-solid border-border focus-within:border-foreground">
      <Link href={link} target="_blank">
        <Image
          src={img}
          alt={`${translate('projects.alt')} ${title}`}
          className="max-h-[24.373rem]"
        />

        <div className="absolute bottom-4 z-[1] flex w-full justify-center">
          <h2 className="text-base font-light text-zinc-50 sm:text-lg">
            {title}
          </h2>
        </div>
      </Link>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/80 to-transparent" />
    </li>
  )
}
