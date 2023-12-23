import { IPathname } from '@/interfaces'

const Projects = ({ pathname }: IPathname) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={pathname === '/projects' ? '#FAFAFA' : '#888888'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-layout-grid group-hover:stroke-primary duration-300"
    >
      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    </svg>
  )
}

export default Projects
