import { IPathname } from '@/interfaces'

const Projects = ({ pathname }: IPathname) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.5625 2.25H3.1875C2.66973 2.25 2.25 2.66973 2.25 3.1875V9.5625C2.25 10.0803 2.66973 10.5 3.1875 10.5H9.5625C10.0803 10.5 10.5 10.0803 10.5 9.5625V3.1875C10.5 2.66973 10.0803 2.25 9.5625 2.25Z"
        stroke={pathname === '/projects' ? 'var(--primary)' : 'var(--gray-100)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-300"
      />
      <path
        d="M20.8125 2.25H14.4375C13.9197 2.25 13.5 2.66973 13.5 3.1875V9.5625C13.5 10.0803 13.9197 10.5 14.4375 10.5H20.8125C21.3303 10.5 21.75 10.0803 21.75 9.5625V3.1875C21.75 2.66973 21.3303 2.25 20.8125 2.25Z"
        stroke={pathname === '/projects' ? 'var(--primary)' : 'var(--gray-100)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-300"
      />
      <path
        d="M9.5625 13.5H3.1875C2.66973 13.5 2.25 13.9197 2.25 14.4375V20.8125C2.25 21.3303 2.66973 21.75 3.1875 21.75H9.5625C10.0803 21.75 10.5 21.3303 10.5 20.8125V14.4375C10.5 13.9197 10.0803 13.5 9.5625 13.5Z"
        stroke={pathname === '/projects' ? 'var(--primary)' : 'var(--gray-100)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-300"
      />
      <path
        d="M20.8125 13.5H14.4375C13.9197 13.5 13.5 13.9197 13.5 14.4375V20.8125C13.5 21.3303 13.9197 21.75 14.4375 21.75H20.8125C21.3303 21.75 21.75 21.3303 21.75 20.8125V14.4375C21.75 13.9197 21.3303 13.5 20.8125 13.5Z"
        stroke={pathname === '/projects' ? 'var(--primary)' : 'var(--gray-100)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-300"
      />
    </svg>
  )
}

export default Projects
