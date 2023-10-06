import { IParagraphy } from "@/interfaces";

const Paragraphy = ({ text, style }: IParagraphy) => {
  return <p className={`font-normal text-gray-3 ${style}`}>{text}</p>;
};

export { Paragraphy };