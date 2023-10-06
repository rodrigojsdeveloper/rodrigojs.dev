import { InputProps } from "@/interfaces";

const Input = ({ label, type, name, htmlFor, id }: InputProps) => {
  return (
    <div className="relative mb-5">
      <label className="font-medium text-md" htmlFor={htmlFor}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        required={true}
        autoComplete="off"
        className="w-full h-10 bg-transparent border border-solid border-gray-5 text-sm p-2.5 mt-1.5 rounded-def duration-300 focus:border-gray-1"
      />
    </div>
  );
};

export { Input };
