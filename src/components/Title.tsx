import { ITitle } from "@/interfaces";

const Title = ({ title }: ITitle) => {
  return <h2 className="font-medium text-4xl">{title}</h2>;
};

export { Title };
