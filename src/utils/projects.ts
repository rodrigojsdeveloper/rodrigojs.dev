import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";
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

import secretaryNaty from "../assets/secretary-naty.png";
import burgerKenzie from "../assets/burger-kenzie.png";
import motorsShop from "../assets/motors-shop.png";
import kenzieHub from "../assets/kenzie-hub.png";
import gitSearch from "../assets/git-search.png";
import geography from "../assets/geography.png";
import nuKenzie from "../assets/nu-kenzie.png";
import { IProjectProps } from "@/interfaces";
import ngCash from "../assets/ng-cash.png";
import api from "../assets/api.png";

const projects: Array<IProjectProps> = [
  {
    img: motorsShop,
    title: "Motors Shop",
    description: "Motors Shop is a car sales website project.",
    link: "https://github.com/rodrigojsdeveloper/motors-shop/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      AiOutlineApi,
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
    img: gitSearch,
    title: "Git Search",
    description:
      "Git Search makes it easy to find GitHub users and their repositories.",
    link: "https://github.com/rodrigojsdeveloper/git-search/",
    stacks: [SiJavascript, SiTypescript, FaReact, SiStyledcomponents],
  },
  {
    img: nuKenzie,
    title: "Nu Kenzie",
    description: "Nu Kenzie is a cost control platform.",
    link: "https://github.com/rodrigojsdeveloper/refactoring-nukenzie/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      AiOutlineApi,
    ],
  },
  {
    img: ngCash,
    title: "NG.CASH",
    description:
      "NG.CASH allows users to make international transfers between each other.",
    link: "https://github.com/rodrigojsdeveloper/ngcash/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      AiOutlineApi,
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
    img: burgerKenzie,
    title: "Burger Kenzie",
    description: "Burger Kenzie is an 'e-commerce', with fictitious products.",
    link: "https://github.com/rodrigojsdeveloper/refactoring-burger-kenzie/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      AiOutlineApi,
    ],
  },
  {
    img: secretaryNaty,
    title: "Secretary Naty",
    description:
      "This test aims to develop several CRUD operations through the user interface (frontend).",
    link: "https://github.com/rodrigojsdeveloper/test-secretarianaty/",
    stacks: [SiJavascript, SiTypescript, TbBrandNextjs, FaReact, SiMui],
  },
  {
    img: kenzieHub,
    title: "Kenzie Hub",
    description: "Kenzie Hub is a skills management app.",
    link: "https://github.com/rodrigojsdeveloper/refactoring-kenzie-hub/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      AiOutlineApi,
    ],
  },
  {
    img: api,
    title: "API",
    description:
      "This API handles the creation of properties and reservation of visits or purchase.",
    link: "https://github.com/rodrigojsdeveloper/api-nodejs/",
    stacks: [
      SiJavascript,
      SiTypescript,
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
    img: geography,
    title: "Geography",
    description:
      "Geography, where users can explore and have fun with countries around the world.",
    link: "https://github.com/rodrigojsdeveloper/geography/",
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiStyledcomponents,
      SiTailwindcss,
    ],
  },
];

const TwoProjects: Array<IProjectProps> = [
  {
    img: motorsShop,
    title: "Motors Shop",
    description: "Motors Shop is a car sales website project.",
    link: "https://github.com/rodrigojsdeveloper/motors-shop/",
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
    img: motorsShop,
    title: "Motors Shop",
    description: "Motors Shop is a car sales website project.",
    link: "https://github.com/rodrigojsdeveloper/motors-shop/",
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

export { projects, TwoProjects };
