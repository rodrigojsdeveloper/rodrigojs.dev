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
  stacks: Array<any>;
}

export interface IProject {
  project: IProjectProps;
}
