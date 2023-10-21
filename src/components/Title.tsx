import { ITitle } from '@/interfaces'

const Title = ({ title }: ITitle) => {
  return <h2 className="text-4xl font-medium">{title}</h2>
}

export { Title }
