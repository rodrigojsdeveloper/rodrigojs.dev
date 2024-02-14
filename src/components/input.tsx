import { InputProps } from '@/interfaces'

export const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-10 w-full rounded-radius border border-solid border-border bg-transparent p-2.5 text-sm placeholder:text-foreground-muted placeholder:focus:text-transparent"
    />
  )
}
