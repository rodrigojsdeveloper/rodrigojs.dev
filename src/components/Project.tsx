import { IProject } from '@/interfaces'
import Paragraphy from './Paragraphy'
import SubTitle from './SubTitle'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <li className="w-full rounded-def border border-solid border-line p-2 hover:border-link-hover hover:bg-link-hover">
      <Link href={project.link} target="_blank">
        <Image
          priority
          src={project.img}
          alt={project.title}
          className="max-h-[20.753rem] rounded-def"
          quality={100}
        />

        <div className="flex flex-col gap-y-2 px-2 py-3">
          <SubTitle title={project.title} />

          <Paragraphy
            text={project.description}
            style="min-h-[2.938rem] leading-7 text-sm"
          />
        </div>
      </Link>
    </li>
  )
}

export default Project
