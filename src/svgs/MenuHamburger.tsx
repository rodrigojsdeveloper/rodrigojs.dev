import { IHandleState } from '@/interfaces'

const MenuHamburger = ({ handleState }: IHandleState) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={handleState}
      className="cursor-pointer"
    >
      <path
        fill="#8C8C8C"
        fillRule="evenodd"
        d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default MenuHamburger
