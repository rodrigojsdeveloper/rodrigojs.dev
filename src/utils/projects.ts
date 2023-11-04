import secretaryNaty from '@/assets/secretary-naty.png'
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
    img: secretaryNaty,
    title: 'Secretary Naty',
    description:
      'Secretary Naty is to perform CRUD operations through the user interface.',
    link: 'https://github.com/rodrigojsdeveloper/test-secretarianaty',
  },
  {
    img: api,
    title: 'API',
    description:
      'This API handles the creation of properties and reservation of visits or purchase.',
    link: 'https://github.com/rodrigojsdeveloper/api-nodejs',
  },
  {
    img: geography,
    title: 'Geography',
    description:
      'Geography, where users can explore and have fun with countries around the world.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
  },
  {
    img: dtMoney,
    title: 'DT Money',
    description:
      'DT Money is a financial management, offering users efficiency in managing their income.',
    link: 'https://github.com/rodrigojsdeveloper/dt-money',
  },
  {
    img: iweather,
    title: 'iWeather',
    description:
      'iWeather is a precise and intuitive weather forecast app to plan your day.',
    link: 'https://github.com/rodrigojsdeveloper/iweather',
  },
  {
    img: todo,
    title: 'ToDo',
    description: 'ToDo streamlines task management with marking and deletion.',
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
    description:
      'Geography, where users can explore and have fun with countries around the world.',
    link: 'https://github.com/rodrigojsdeveloper/geography',
  },
]

export { projects, initialHomeProjects }
