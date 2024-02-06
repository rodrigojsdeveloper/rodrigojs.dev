import { IParagraph } from '@/interfaces'
import { cn } from '@/utils/cn'

const Paragraph = ({ text, className }: IParagraph) => {
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

export { Paragraph }
