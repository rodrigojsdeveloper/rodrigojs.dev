import { IProject } from '@/interfaces'
import Paragraph from './Paragraph'
import SubTitle from './SubTitle'
import Image from '@/components/Image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <li className="w-full rounded-def border border-solid border-gray-200 p-2 hover:border-hover hover:bg-hover">
      <Link href={project.link} target="_blank" className="rounded-def">
        <Image
          src={project.img}
          alt={project.title}
          className="max-h-[20.753rem] rounded-def"
          width={573.6}
          height={322.65}
        />

        <div className="flex flex-col gap-y-2 px-2 py-3">
          <SubTitle title={project.title} />

          <Paragraph
            text={project.description}
            style="min-h-[2.938rem] text-sm"
          />
        </div>
      </Link>
    </li>
  )
}

export default Project
