import { ParagraphProps } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Paragraph = ({ text, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        'text-pretty text-sm text-foreground-muted sm:text-base',
        className,
      )}
    >
      {text}
    </p>
  )
}
