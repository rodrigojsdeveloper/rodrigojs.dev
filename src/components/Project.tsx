import { IProject } from '@/interfaces'
import Paragraphy from './Paragraphy'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      className="w-full rounded-def border border-solid border-zinc-800 p-2 hover:border-link-1 hover:bg-link-1 active:bg-link-2"
    >
      <Image
        priority={true}
        src={project.img}
        alt={project.title}
        className="rounded-def"
      />

      <div className="px-2 py-3">
        <h3 className="text-xl font-normal text-white">{project.title}</h3>

        <Paragraphy
          text={project.description}
          style="w-full min-h-47 leading-7 text-sm mt-2"
        />
      </div>
    </Link>
  )
}

export default Project
