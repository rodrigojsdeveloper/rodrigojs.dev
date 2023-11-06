import { IProject } from '@/interfaces'
import Paragraphy from './Paragraphy'
import SubTitle from './SubTitle'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <li className="hover:border-link-hover hover:bg-link-hover w-full rounded-def border border-solid border-line p-2">
      <Link href={project.link} target="_blank">
        <Image
          priority
          src={project.img}
          alt={project.title}
          className="rounded-def"
        />

        <div className="flex flex-col gap-y-2 px-2 py-3">
          <SubTitle title={project.title} />

          <Paragraphy
            text={project.description}
            style="w-full min-h-47 leading-7 text-sm"
          />
        </div>
      </Link>
    </li>
  )
}

export default Project
