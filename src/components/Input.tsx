import { InputProps } from '@/interfaces'

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-10 w-full rounded-def border border-solid border-gray-200 bg-transparent p-2.5 text-sm duration-300 focus:border-gray-100 placeholder:focus:text-transparent"
    />
  )
}

export default Input
