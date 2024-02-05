import { IProject } from '@/interfaces'
import Paragraph from './Paragraph'
import SubTitle from './SubTitle'
import Image from '@/components/Image'
import Link from 'next/link'

const Project = ({ project }: IProject) => {
  return (
    <li className="rounded-radius border border-solid border-border p-2 hover:bg-border">
      <Link href={project.link} target="_blank" className="rounded-radius">
        <Image
          src={project.img}
          alt={project.title}
          className="max-h-[20.753rem] rounded-radius"
        />

        <div className="flex flex-col gap-y-2 px-2 py-3">
          <SubTitle title={project.title} />

          <Paragraph
            text={project.description}
            className="min-h-[2.938rem] text-sm"
          />
        </div>
      </Link>
    </li>
  )
}

export default Project
