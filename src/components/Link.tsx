import { ILink } from "@/interfaces";

const Link = ({ Icon, text }: ILink) => {
  return (
    <a className="w-full h-40 flex row items-center gap-2 px-2.5 py-2 duration-300 text-gray-1 text-sm cursor-pointer rounded-def hover:bg-gray-2">
      {Icon} {text}
    </a>
  );
};

export { Link };
