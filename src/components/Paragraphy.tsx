import { IParagraphy } from '@/interfaces'

const Paragraphy = ({ text, style }: IParagraphy) => {
  return (
    <p
      className={`text-sm leading-relaxed text-color-paragraphy ${style} sm:text-base`}
    >
      {text}
    </p>
  )
}

export default Paragraphy
