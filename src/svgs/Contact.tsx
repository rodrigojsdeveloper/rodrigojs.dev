import { IPathname } from '@/interfaces'

const Contact = ({ pathname }: IPathname) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={pathname === '/contact' ? 'rgb(255,255,255)' : '#8C8C8C'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4m8-10v.01M8 11v.01m8-.01v.01"
      />
    </svg>
  )
}

export default Contact
