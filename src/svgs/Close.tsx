import { IHandleState } from '@/interfaces'

const Close = ({ handleState }: IHandleState) => {
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
        fill="none"
        stroke="#8C8C8C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7 7l10 10M7 17L17 7"
      />
    </svg>
  )
}

export default Close
