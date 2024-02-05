import { IStack } from '@/interfaces'
import cn from '@/utils/cn'

const Stack = ({ Icon, bg }: IStack) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={cn(
        'rounded-radius flex size-14 select-none items-center justify-center gap-2 px-3 py-2',
        bg,
      )}
    >
      {Icon}
    </li>
  )
}

export default Stack
