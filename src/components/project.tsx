import { ProjectProps } from '@/interfaces'
import { Paragraph } from './paragraph'
import { SubTitle } from './subtitle'
import { Image } from '@/components/image'
import Link from 'next/link'

export const Project = ({ img, title, description, link }: ProjectProps) => {
  return (
    <li className="rounded-radius border border-solid border-border p-2 focus-within:bg-hover hover:bg-hover">
      <Link href={link} target="_blank" className="rounded-radius">
        <Image
          src={img}
          alt={title}
          className="max-h-[20.753rem] rounded-radius"
        />

        <div className="flex flex-col gap-y-2 px-2 py-3">
          <SubTitle title={title} />

          <Paragraph text={description} className="min-h-[2.938rem] text-sm" />
        </div>
      </Link>
    </li>
  )
}
