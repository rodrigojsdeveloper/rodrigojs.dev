import { ILink } from "@/interfaces";
import Link from "next/link";

const CustomLink = ({ Icon, text, href, activeLink, onClick }: ILink) => {
  return (
    <Link
      href={"/" + href}
      onClick={onClick}
      className={`w-full h-40 flex row items-center gap-2 px-2.5 py-2 duration-300 text-sm rounded-def ${activeLink} hover:bg-gray-2 hover:text-gray-1 active:bg-gray-6`}
    >
      {Icon} {text}
    </Link>
  );
};

export { CustomLink };
