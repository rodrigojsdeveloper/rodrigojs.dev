import { ITitle } from '@/interfaces'

export const SubTitle = ({ title }: ITitle) => {
  return <h2 className="text-lg font-normal sm:text-xl">{title}</h2>
}
