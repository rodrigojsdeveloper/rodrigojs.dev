import { InputProps } from '@/interfaces'

const Textarea = ({ name, placeholder }: InputProps) => {
  return (
    <textarea
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-20 w-full select-none resize-none rounded-def border border-solid border-gray-200 bg-transparent p-2.5 text-sm duration-300 focus:border-gray-100 placeholder:focus:text-transparent"
    />
  )
}

export default Textarea
