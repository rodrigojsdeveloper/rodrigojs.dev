import { IProject } from '@/interfaces'
import Paragraphy from './Paragraphy'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      className="min-h-408 w-full rounded-def border border-solid border-gray-5 p-2 hover:border-link-1 hover:bg-link-1 active:bg-link-2"
    >
      <Image
        priority={true}
        src={project.img}
        alt={project.title}
        className="rounded-def"
      />

      <div className="px-2 py-4">
        <h3 className="text-xl font-normal text-gray-1">{project.title}</h3>

        <Paragraphy
          text={project.description}
          style="w-full min-h-58 leading-1.8 text-sm mt-2 font-light"
        />

        <div className="flex flex-wrap gap-3 pb-3 pt-5">
          {project.stacks.map((Icon, index) => (
            <Icon key={index} size={22} color="#D4D4D4" />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project
