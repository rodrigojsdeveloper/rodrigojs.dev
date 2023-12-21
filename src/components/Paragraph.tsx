import { IParagraph } from '@/interfaces'

const Paragraph = ({ text, style }: IParagraph) => {
  return (
    <p
      className={`text-color-paragraph text-sm leading-relaxed ${style} sm:text-base`}
    >
      {text}
    </p>
  )
}

export default Paragraph
