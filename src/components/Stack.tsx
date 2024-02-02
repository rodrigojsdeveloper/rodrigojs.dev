import { IStack } from '@/interfaces'

const Stack = ({ Icon, bg }: IStack) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={`${bg} flex size-14 select-none items-center justify-center gap-2 rounded-def px-3 py-2`}
    >
      {Icon}
    </li>
  )
}

export default Stack
