import Paragraphy from './Paragraphy'
import { IJob } from '@/interfaces'
import Image from 'next/image'
import date from '@/assets/others/date.svg'

const Job = ({ job }: IJob) => {
  return (
    <li className="flex w-full select-none flex-col gap-y-4 rounded-def border border-solid border-line p-5">
      <h2 className="text-2xl">{job.company}</h2>

      <div className="flex w-full flex-col gap-y-1.5">
        <h3>{job.position}</h3>

        <Paragraphy text={job.description} style="font-light" />
      </div>

      <div className="flex flex-row items-center gap-x-4">
        <Image src={date} alt="date" priority />

        <span className="text-sm text-color-paragraphy">{job.date}</span>
      </div>
    </li>
  )
}

export default Job
