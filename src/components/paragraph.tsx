import { IParagraph } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Paragraph = ({ text, className }: IParagraph) => {
  return (
    <p
      className={cn(
        'text-pretty text-sm text-muted-foreground sm:text-base',
        className,
      )}
    >
      {text}
    </p>
  )
}
