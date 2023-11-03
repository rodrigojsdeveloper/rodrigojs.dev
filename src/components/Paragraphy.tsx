import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return <p className={`leading-relaxed text-gray-1 ${style}`}>{text}</p>
}

export default Paragraphy
