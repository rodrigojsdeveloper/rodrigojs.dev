import { StaticImageData } from "next/image";

export interface ILink {
  Icon: any;
  text: string;
  href: string;
}

export interface IProjectProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
  stacks: Array<any>;
}

export interface IProject {
  project: IProjectProps;
}

export interface IParagraphy {
  text: string;
  style?: string;
}

export interface InputProps {
  label: string;
  type: string;
  name: string;
  htmlFor: string;
  id: string;
}