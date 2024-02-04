import { InputProps } from '@/interfaces'

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="border-border placeholder:text-muted-foreground h-10 w-full select-none rounded-def border border-solid bg-transparent p-2.5 text-sm placeholder:focus:text-transparent"
    />
  )
}

export default Input
