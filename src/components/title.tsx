import { TitleProps } from '@/interfaces'

export const Title = ({ title }: TitleProps) => {
  return <h1 className="text-3xl sm:text-4xl">{title}</h1>
}
