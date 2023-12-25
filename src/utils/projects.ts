import devFinder from '@/assets/devfinder.png'
import motorsShop from '@/assets/motors-shop.png'
import geography from '@/assets/geography.png'
import nuKenzie from '@/assets/nu-kenzie.png'
import iweather from '@/assets/iweather.png'
import dtMoney from '@/assets/dt-money.png'
import todo from '@/assets/todo.png'
import api from '@/assets/api.png'

import { IProjectProps } from '@/interfaces'

const projects: IProjectProps[] = [
  {
    img: motorsShop,
    title: 'Motors Shop',
    description: 'Motors Shop is a car sales website project.',
    link: 'https://github.com/rodrigojsdeveloper/motors-shop',
  },
  {
    img: nuKenzie,
    title: 'Nu Kenzie',
    description: 'Nu Kenzie is a cost control platform.',
    link: 'https://github.com/rodrigojsdeveloper/refactoring-nukenzie',
  },
  {
    img: devFinder,
    title: 'Dev Finder',
    description: 'Dev Finder simplifies searching GitHub.',
    link: 'https://github.com/rodrigojsdeveloper/devfinder',
  },
  {
    img: api,
    title: 'API',
    description: 'API to create, reserve and buy properties.',
    link: 'https://github.com/rodrigojsdeveloper/api-nodejs',
  },
  {
    img: geography,
    title: 'Geography',
    description: 'Geography explore and enjoy global countries.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
  },
  {
    img: dtMoney,
    title: 'DT Money',
    description: 'DT Money efficient financial management.',
    link: 'https://github.com/rodrigojsdeveloper/dt-money',
  },
  {
    img: iweather,
    title: 'iWeather',
    description: 'iWeather intuitive and accurate weather forecast.',
    link: 'https://github.com/rodrigojsdeveloper/iweather',
  },
  {
    img: todo,
    title: 'ToDo',
    description: 'ToDo simplifies with tags and deletion.',
    link: 'https://github.com/rodrigojsdeveloper/todo',
  },
]

const initialHomeProjects: IProjectProps[] = [
  {
    img: motorsShop,
    title: 'Motors Shop',
    description: 'Motors Shop is a car sales website project.',
    link: 'https://github.com/rodrigojsdeveloper/motors-shop/',
  },
  {
    img: geography,
    title: 'Geography',
    description: 'Geography explore and enjoy global countries.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
  },
]

export { projects, initialHomeProjects }
