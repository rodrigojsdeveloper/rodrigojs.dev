import { ITitle } from '@/interfaces'

const SubTitle = ({ title }: ITitle) => {
  return (
    <h2 className="text-lg font-normal text-color-title sm:text-xl">{title}</h2>
  )
}

export default SubTitle
