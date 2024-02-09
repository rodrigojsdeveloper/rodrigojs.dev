import { IStack } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Stack = ({ Icon, bg }: IStack) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={cn(
        'flex size-14 select-none items-center justify-center gap-2 rounded-radius px-3 py-2',
        bg,
      )}
    >
      {Icon}
    </li>
  )
}
