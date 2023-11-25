import Paragraphy from './Paragraphy'
import { IJob } from '@/interfaces'

const Job = ({ job }: IJob) => {
  return (
    <li className="flex w-full flex-col gap-y-4 rounded-def border border-solid border-line p-5">
      <h2 className="text-2xl">{job.company}</h2>

      <div className="flex w-full flex-col gap-y-1.5">
        <h3>{job.position}</h3>

        <Paragraphy text={job.description} />
      </div>

      <div className="flex flex-row items-center gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="#8C8C8C"
            d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699ZM1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756L1.4 7.742Zm5.267 6.877v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15Zm-8.333-3.977v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15ZM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0v-.92Z"
          />
        </svg>

        <span className="text-sm text-color-paragraphy">{job.date}</span>
      </div>
    </li>
  )
}

export default Job
