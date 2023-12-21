import { ITitle } from '@/interfaces'

const SubTitle = ({ title }: ITitle) => {
  return (
    <h2 className="text-color-title text-lg font-normal sm:text-xl">{title}</h2>
  )
}

export default SubTitle
