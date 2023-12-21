import date from '@/assets/others/date.svg'
import Paragraph from './Paragraph'
import { IJob } from '@/interfaces'
import Image from 'next/image'

const Job = ({ job }: IJob) => {
  return (
    <li className="flex w-full select-none flex-col gap-y-4 rounded-def border border-solid border-line p-5">
      <h2 className="text-2xl text-color-title">{job.company}</h2>

      <div className="flex w-full flex-col gap-y-1.5">
        <h3 className="text-zinc-50">{job.position}</h3>

        <Paragraph text={job.description} style="font-light" />
      </div>

      <div className="flex flex-row items-center gap-x-4">
        <Image src={date} alt="date" priority />

        <span className="text-color-paragraph text-sm">{job.date}</span>
      </div>
    </li>
  )
}

export default Job
