import { ProjectProps } from '@/interfaces'
import { Image } from '@/components/image'
import Link from 'next/link'

export const Project = ({ img, title, link }: ProjectProps) => {
  return (
    <li className="relative list-none overflow-hidden rounded-radius border border-solid border-border">
      <Link href={link} target="_blank" className="rounded-radius">
        <Image
          src={img}
          alt={title}
          className="max-h-[24.373rem] rounded-radius"
        />

        <div className="absolute bottom-4 left-4 z-[1] flex w-full justify-center pr-4">
          <h2 className="text-base sm:text-lg">{title}</h2>
        </div>
      </Link>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-background to-transparent" />
    </li>
  )
}
