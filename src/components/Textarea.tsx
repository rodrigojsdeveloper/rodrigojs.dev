import { InputProps } from '@/interfaces'

const Textarea = ({ label, type, name, htmlFor, id }: InputProps) => {
  return (
    <div className="relative mb-5">
      <label className="text-md font-medium" htmlFor={htmlFor}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={true}
        autoComplete="off"
        className="mt-1.5 h-20 w-full resize-none rounded-def border border-solid border-gray-4 bg-transparent p-2.5 text-sm duration-300 focus:border-gray-1"
      />
    </div>
  )
}

export default Textarea
