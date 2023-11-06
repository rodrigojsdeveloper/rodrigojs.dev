import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return (
    <p className={`text-color-paragraphy leading-relaxed ${style}`}>{text}</p>
  )
}

export default Paragraphy
