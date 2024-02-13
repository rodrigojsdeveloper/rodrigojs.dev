import { ProjectProps } from '@/interfaces'
import { Paragraph } from './paragraph'
import { SubTitle } from './subtitle'
import { Image } from '@/components/image'
import Link from 'next/link'

export const Project = ({ img, title, description, link }: ProjectProps) => {
  return (
    <li className="relative list-none overflow-hidden rounded-radius border border-solid border-border focus-within:bg-hover hover:bg-hover">
      <Link href={link} target="_blank" className="rounded-radius">
        <Image
          src={img}
          alt={title}
          className="max-h-[24.373rem] rounded-radius"
        />

        <div className="absolute bottom-4 left-4 z-10 pr-4">
          <SubTitle title={title} />

          <Paragraph text={description} />
        </div>
      </Link>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
    </li>
  )
}
