import { ITitle } from '@/interfaces'

export const Title = ({ title }: ITitle) => {
  return <h1 className="text-3xl font-normal sm:text-4xl">{title}</h1>
}
