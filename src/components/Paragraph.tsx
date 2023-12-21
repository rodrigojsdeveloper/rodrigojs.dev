import { IParagraph } from '@/interfaces'

const Paragraph = ({ text, style }: IParagraph) => {
  return (
    <p
      className={`text-sm leading-relaxed text-color-paragraph ${style} sm:text-base`}
    >
      {text}
    </p>
  )
}

export default Paragraph
