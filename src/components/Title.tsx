import { ITitle } from '@/interfaces'

const Title = ({ title }: ITitle) => {
  return (
    <h1 className="text-3xl font-normal text-color-title sm:text-4xl">
      {title}
    </h1>
  )
}

export default Title
