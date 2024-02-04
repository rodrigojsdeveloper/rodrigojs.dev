import { InputProps } from '@/interfaces'

const Textarea = ({ name, placeholder }: InputProps) => {
  return (
    <textarea
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="border-border placeholder:text-muted-foreground h-24 w-full select-none resize-none rounded-def border border-solid bg-transparent p-2.5 text-sm placeholder:focus:text-transparent sm:h-32"
    />
  )
}

export default Textarea
