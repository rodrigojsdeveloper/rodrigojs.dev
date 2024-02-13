import { StackProps } from '@/interfaces'
import { Icon } from '@iconify/react'
import { cn } from '@/utils/cn'

export const Stack = ({ icon, bg }: StackProps) => {
  return (
    <li
      style={{ backgroundColor: bg }}
      className={cn(
        'flex size-14 select-none items-center justify-center gap-2 rounded-radius px-3 py-2',
        bg,
      )}
    >
      <Icon icon={icon} width="32px" height="32px" />
    </li>
  )
}
