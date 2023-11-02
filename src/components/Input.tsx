import { InputProps } from '@/interfaces'

const Input = ({ label, type, name, htmlFor, id }: InputProps) => {
  return (
    <div className="relative mb-5">
      <label className="text-md select-none font-medium" htmlFor={htmlFor}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required={true}
        autoComplete="off"
        className="focus:border-gray-1 mt-1.5 h-10 w-full rounded-def border border-solid border-gray-2 bg-transparent p-2.5 text-sm duration-300"
      />
    </div>
  )
}

export default Input
