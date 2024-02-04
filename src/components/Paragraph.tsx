import { IParagraph } from '@/interfaces'

const Paragraph = ({ text, className }: IParagraph) => {
  return (
    <p
      className={`text-pretty text-sm text-muted-foreground ${className} sm:text-base`}
    >
      {text}
    </p>
  )
}

export default Paragraph
