import { ITitle } from '@/interfaces'

const Title = ({ title }: ITitle) => {
  return <h1 className="text-4xl font-normal">{title}</h1>
}

export default Title
