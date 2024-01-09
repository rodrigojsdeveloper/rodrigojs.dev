import devFinder from '@/assets/devfinder.png'
import motorsShop from '@/assets/motors-shop.png'
import geography from '@/assets/geography.png'
import nuKenzie from '@/assets/nu-kenzie.png'
import iweather from '@/assets/iweather.png'
import dtMoney from '@/assets/dt-money.png'
import todo from '@/assets/todo.png'
import api from '@/assets/api.png'

import { IProjectProps } from '@/interfaces'
import { StaticImageData } from 'next/image'

const createProject = (
  img: StaticImageData,
  title: string,
  description: string,
  link: string,
): IProjectProps => {
  return { img, title, description, link }
}

const projects: IProjectProps[] = [
  createProject(
    motorsShop,
    'Motors Shop',
    'Motors Shop é um projeto de site de vendas de automóveis.',
    'https://github.com/rodrigojsdeveloper/motors-shop',
  ),
  createProject(
    nuKenzie,
    'Nu Kenzie',
    'Nu Kenzie é uma plataforma de controle de custos.',
    'https://github.com/rodrigojsdeveloper/refactoring-nukenzie',
  ),
  createProject(
    devFinder,
    'DevFinder',
    'O DevFinder simplifica a pesquisa de usuários no GitHub.',
    'https://github.com/rodrigojsdeveloper/devfinder',
  ),
  createProject(
    api,
    'API',
    'API que trata da criação de propriedades e reserva de visitas ou compra.',
    'https://github.com/rodrigojsdeveloper/api-nodejs',
  ),
  createProject(
    geography,
    'Geography',
    'Geography é onde os usuários podem explorar os países ao redor do mundo.',
    'https://github.com/rodrigojsdeveloper/geography',
  ),
  createProject(
    dtMoney,
    'DT Money',
    'DT Money é uma gestão financeira de suas receitas, despesas e saldo.',
    'https://github.com/rodrigojsdeveloper/dt-money',
  ),
  createProject(
    iweather,
    'iWeather',
    'iWeather é um site de previsão do tempo preciso para planejar o seu dia.',
    'https://github.com/rodrigojsdeveloper/iweather',
  ),
  createProject(
    todo,
    'ToDo',
    'ToDo agiliza o gerenciamento de tarefas com marcação e exclusão.',
    'https://github.com/rodrigojsdeveloper/todo',
  ),
]

const initialHomeProjects: IProjectProps[] = [projects[0], projects[4]]

export { projects, initialHomeProjects }
