import { FaDocker, FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { VscJson } from 'react-icons/vsc'
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
  SiTailwindcss,
  SiReactrouter,
  SiZod,
  SiPrettier,
  SiEslint,
  SiDotenv,
  SiReacthookform,
  SiVite,
  SiEditorconfig,
  SiVercel,
} from 'react-icons/si'

import secretaryNaty from '@/assets/secretary-naty.png'
import burgerKenzie from '@/assets/burger-kenzie.png'
import motorsShop from '@/assets/motors-shop.png'
import kenzieHub from '@/assets/kenzie-hub.png'
import gitSearch from '@/assets/git-search.png'
import geography from '@/assets/geography.png'
import nuKenzie from '@/assets/nu-kenzie.png'
import coreNote from '@/assets/corenote.png'
import iweather from '@/assets/iweather.png'
import dtMoney from '@/assets/dt-money.png'
import todo from '@/assets/todo.png'
import api from '@/assets/api.png'

import { IProjectProps } from '@/interfaces'
import { BiLogoNetlify } from 'react-icons/bi'

const projects: IProjectProps[] = [
  {
    img: motorsShop,
    title: 'Motors Shop',
    description: 'Motors Shop is a car sales website project.',
    link: 'https://github.com/rodrigojsdeveloper/motors-shop',
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
    img: gitSearch,
    title: 'Git Search',
    description:
      'Git Search makes it easy to find GitHub users and their repositories.',
    link: 'https://github.com/rodrigojsdeveloper/git-search',
    stacks: [SiJavascript, SiTypescript, FaReact, SiStyledcomponents, SiVercel],
  },
  {
    img: nuKenzie,
    title: 'Nu Kenzie',
    description: 'Nu Kenzie is a cost control platform.',
    link: 'https://github.com/rodrigojsdeveloper/refactoring-nukenzie',
    stacks: [SiJavascript, SiTypescript, FaReact, SiStyledcomponents, SiVercel],
  },
  {
    img: coreNote,
    title: 'CoreNote',
    description:
      'CoreNote is a web application for creating and managing to-do lists.',
    link: 'https://github.com/rodrigojsdeveloper/corenote',
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
    img: burgerKenzie,
    title: 'Burger Kenzie',
    description: "Burger Kenzie is an 'e-commerce', with fictitious products.",
    link: 'https://github.com/rodrigojsdeveloper/refactoring-burger-kenzie',
    stacks: [SiJavascript, SiTypescript, FaReact, SiStyledcomponents, SiVercel],
  },
  {
    img: secretaryNaty,
    title: 'Secretary Naty',
    description:
      'This test aims to develop several CRUD operations through the user interface (frontend).',
    link: 'https://github.com/rodrigojsdeveloper/test-secretarianaty',
    stacks: [SiJavascript, SiTypescript, TbBrandNextjs, SiMui, SiVercel],
  },
  {
    img: kenzieHub,
    title: 'Kenzie Hub',
    description: 'Kenzie Hub is a skills management app.',
    link: 'https://github.com/rodrigojsdeveloper/refactoring-kenzie-hub',
    stacks: [SiJavascript, SiTypescript, FaReact, SiStyledcomponents, SiVercel],
  },
  {
    img: api,
    title: 'API',
    description:
      'This API handles the creation of properties and reservation of visits or purchase.',
    link: 'https://github.com/rodrigojsdeveloper/api-nodejs',
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
    title: 'Geography',
    description:
      'Geography, where users can explore and have fun with countries around the world.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiTailwindcss,
      SiReactrouter,
      SiReacthookform,
      SiZod,
      SiEditorconfig,
      SiPrettier,
      SiEslint,
      SiVite,
      SiVercel,
      BiLogoNetlify,
    ],
  },
  {
    img: dtMoney,
    title: 'DT Money',
    description:
      'DT Money is a financial management, offering users efficiency in managing their income.',
    link: 'https://github.com/rodrigojsdeveloper/dt-money',
    stacks: [
      SiJavascript,
      SiTypescript,
      TbBrandNextjs,
      SiTailwindcss,
      SiReacthookform,
      SiZod,
      SiEditorconfig,
      SiPrettier,
      SiEslint,
      SiVercel,
      BiLogoNetlify,
    ],
  },
  {
    img: iweather,
    title: 'iWeather',
    description:
      'iWeather is a precise and intuitive weather forecast app to plan your day.',
    link: 'https://github.com/rodrigojsdeveloper/iweather',
    stacks: [
      SiJavascript,
      SiTypescript,
      TbBrandNextjs,
      SiTailwindcss,
      SiDotenv,
      SiEditorconfig,
      SiPrettier,
      SiEslint,
      SiVercel,
      BiLogoNetlify,
    ],
  },
  {
    img: todo,
    title: 'ToDo',
    description: 'ToDo streamlines task management with marking and deletion.',
    link: 'https://github.com/rodrigojsdeveloper/todo',
    stacks: [
      SiJavascript,
      SiTypescript,
      TbBrandNextjs,
      SiTailwindcss,
      SiReacthookform,
      SiZod,
      SiEditorconfig,
      SiPrettier,
      SiEslint,
      SiVercel,
      BiLogoNetlify,
    ],
  },
]

const initialHomeProjects: IProjectProps[] = [
  {
    img: motorsShop,
    title: 'Motors Shop',
    description: 'Motors Shop is a car sales website project.',
    link: 'https://github.com/rodrigojsdeveloper/motors-shop/',
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
    img: geography,
    title: 'Geography',
    description:
      'Geography, where users can explore and have fun with countries around the world.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
    stacks: [
      SiJavascript,
      SiTypescript,
      FaReact,
      SiTailwindcss,
      SiReactrouter,
      SiReacthookform,
      SiZod,
      SiEditorconfig,
      SiPrettier,
      SiEslint,
      SiVite,
    ],
  },
]

export { projects, initialHomeProjects }
