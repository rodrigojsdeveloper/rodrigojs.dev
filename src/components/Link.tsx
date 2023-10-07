import { ILink } from "@/interfaces";

const Link = ({ Icon, text, href }: ILink) => {
  return (
    <a
      href={"/" + href}
      className="w-full h-40 flex row items-center gap-2 px-2.5 py-2 duration-300 text-sm rounded-def bg-transparent text-gray-4 hover:bg-gray-2 hover:text-gray-1 active:bg-gray-6"
    >
      {Icon} {text}
    </a>
  );
};

export { Link };
