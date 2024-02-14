import { TitleProps } from '@/interfaces'

export const SubTitle = ({ title }: TitleProps) => {
  return <h2 className="text-lg sm:text-xl">{title}</h2>
}
