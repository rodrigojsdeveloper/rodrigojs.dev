import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return (
    <p className={`text-gray-1 font-normal leading-relaxed ${style}`}>{text}</p>
  )
}

export default Paragraphy
