import { TitleProps } from '@/interfaces'

export const SubTitle = ({ title }: TitleProps) => {
  return <h2 className="text-lg font-normal sm:text-xl">{title}</h2>
}
