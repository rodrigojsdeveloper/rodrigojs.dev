import { InputProps } from '@/interfaces'

export const Textarea = ({ name, placeholder }: InputProps) => {
  return (
    <textarea
      name={name}
      required={true}
      autoComplete="off"
      placeholder={placeholder}
      className="h-24 w-full resize-none rounded-radius border border-solid border-border bg-transparent p-3 text-sm placeholder:text-foreground-muted placeholder:focus:text-transparent sm:h-32"
    />
  )
}
