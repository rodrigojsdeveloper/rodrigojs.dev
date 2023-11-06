import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return <p className={`leading-relaxed text-color-paragraphy ${style}`}>{text}</p>
}

export default Paragraphy
