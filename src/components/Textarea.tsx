import { InputProps } from '@/interfaces'

const Textarea = ({ label, name, htmlFor, id }: InputProps) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <label className="select-none font-medium" htmlFor={htmlFor}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={true}
        autoComplete="off"
        className="h-20 w-full resize-none rounded-def border border-solid border-neutral-800 bg-transparent p-2.5 text-sm duration-300 focus:border-gray-1"
      />
    </div>
  )
}

export default Textarea
