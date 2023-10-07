import { InputProps } from "@/interfaces";

const Textarea = ({ label, type, name, htmlFor, id }: InputProps) => {
  return (
    <div className="relative mb-5">
      <label className="font-medium text-md" htmlFor={htmlFor}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required={true}
        autoComplete="off"
        className="w-full h-20 bg-transparent border border-solid border-gray-4 text-sm p-2.5 mt-1.5 rounded-def duration-300 resize-none focus:border-gray-1"
      />
    </div>
  );
};

export { Textarea };
