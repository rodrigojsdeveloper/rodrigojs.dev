import { InputProps } from '@/interfaces'

const Input = ({ label, type, name, htmlFor, id }: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-y-1.5">
      <label className="select-none font-medium text-zinc-50" htmlFor={htmlFor}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required={true}
        autoComplete="off"
        className="h-10 w-full rounded-def border border-solid border-line bg-transparent p-2.5 text-sm duration-300 focus:border-color-paragraph"
      />
    </div>
  )
}

export default Input
