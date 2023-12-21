import { ITitle } from '@/interfaces'

const Title = ({ title }: ITitle) => {
  return (
    <h1 className="text-color-title text-3xl font-normal sm:text-4xl">
      {title}
    </h1>
  )
}

export default Title
