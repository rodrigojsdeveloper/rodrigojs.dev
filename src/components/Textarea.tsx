import { InputProps } from '@/interfaces'

const Textarea = ({ name, placeholder }: InputProps) => {
  return (
    <textarea
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-24 w-full select-none resize-none rounded-def border border-solid border-gray-200 bg-transparent p-2.5 text-sm duration-300 placeholder:text-gray-100 focus:border-secondary placeholder:focus:text-transparent sm:h-32"
    />
  )
}

export default Textarea
