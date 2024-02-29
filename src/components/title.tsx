import { TitleProps } from '@/interfaces'

export const Title = ({ title }: TitleProps) => {
  return <h1 className="text-2xl sm:text-3xl">{title}</h1>
}
