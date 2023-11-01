import { InputProps } from '@/interfaces'

const Textarea = ({ label, name, htmlFor, id }: InputProps) => {
  return (
    <div className="relative mb-5">
      <label className="text-md select-none font-medium" htmlFor={htmlFor}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={true}
        autoComplete="off"
        className="focus:border-gray-1 mt-1.5 h-20 w-full resize-none rounded-def border border-solid border-gray-4 bg-transparent p-2.5 text-sm duration-300"
      />
    </div>
  )
}

export default Textarea
