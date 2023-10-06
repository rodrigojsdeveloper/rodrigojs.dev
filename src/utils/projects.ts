import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
import { IProject } from "../interfaces";
import {
  SiJavascript,
  SiStyledcomponents,
  SiTypescript,
  SiMui,
  SiSwagger,
  SiPostgresql,
  SiJest,
  SiExpress,
  SiJsonwebtokens,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

import { IProjectProps } from "@/interfaces";
import home from "../assets/home.png";

const projects: Array<IProjectProps> = [
  {
    img: home,
    title: "Motors Shop",
    description: "Motors Shop is a car sales website project.",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      FaNodeJs,
      SiExpress,
      VscJson,
      SiJsonwebtokens,
      SiJest,
      SiPostgresql,
      SiSwagger,
      FaDocker,
    ],
  },
  {
    img: home,
    title: "Motors Shop",
    description: "Motors Shop is a car sales website project.",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      FaNodeJs,
      SiExpress,
      VscJson,
      SiJsonwebtokens,
      SiJest,
      SiPostgresql,
      SiSwagger,
      FaDocker,
    ],
  },
];

export { projects };
