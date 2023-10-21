import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return (
    <p className={`font-normal leading-relaxed text-gray-3 ${style}`}>{text}</p>
  )
}

export { Paragraphy }
