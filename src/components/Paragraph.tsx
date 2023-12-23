import { IParagraph } from '@/interfaces'

const Paragraph = ({ text, style }: IParagraph) => {
  return (
    <p className={`text-pretty text-sm text-gray-100 ${style} sm:text-base`}>
      {text}
    </p>
  )
}

export default Paragraph
