import { InputProps } from '@/interfaces'

const Textarea = ({ name, placeholder }: InputProps) => {
  return (
    <textarea
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="rounded-radius h-24 w-full select-none resize-none border border-solid border-border bg-transparent p-2.5 text-sm placeholder:text-muted-foreground placeholder:focus:text-transparent sm:h-32"
    />
  )
}

export default Textarea
