import { InputProps } from '@/interfaces'

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-10 w-full select-none rounded-radius border border-solid border-border bg-transparent p-2.5 text-sm placeholder:text-muted-foreground placeholder:focus:text-transparent"
    />
  )
}

export default Input
