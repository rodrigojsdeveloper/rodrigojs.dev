import { IJob } from "@/interfaces";

const Job = ({ job }: IJob) => {
  return (
    <div className="w-full border border-solid border-gray-5 rounded-def p-5">
      <h2 className="text-gray-1 text-2xl">{job.company}</h2>

      <h3 className="text-gray-1 text-md mt-4">{job.position}</h3>

      <p className="min-h-286 text-gray-3 text-md leading-relaxed mt-6 mb-8">
        {job.description}
      </p>

      <div className="flex flex-row items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="#A3A3A3"
            d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699ZM1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756L1.4 7.742Zm5.267 6.877v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15Zm-8.333-3.977v1.666H5v-1.666h1.667Zm4.166 0v1.666H9.167v-1.666h1.666Zm4.167 0v1.666h-1.667v-1.666H15ZM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0v-.92Z"
          />
        </svg>

        <span className="text-gray-3 text-sm ml-3">{job.date}</span>
      </div>
    </div>
  );
};

export { Job };
