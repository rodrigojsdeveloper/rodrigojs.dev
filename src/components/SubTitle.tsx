import { ITitle } from '@/interfaces'

const SubTitle = ({ title }: ITitle) => {
  return <h2 className="text-xl font-normal">{title}</h2>
}

export default SubTitle
