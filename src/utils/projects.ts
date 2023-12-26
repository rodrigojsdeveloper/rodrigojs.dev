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
    'O DevFinder simplifica a pesquisa no GitHub.',
    'https://github.com/rodrigojsdeveloper/devfinder',
  ),
  createProject(
    api,
    'API',
    'API para criar, reservar e comprar propriedades.',
    'https://github.com/rodrigojsdeveloper/api-nodejs',
  ),
  createProject(
    geography,
    'Geography',
    'Geography explora e desfrutar de países globais.',
    'https://github.com/rodrigojsdeveloper/geography',
  ),
  createProject(
    dtMoney,
    'DT Money',
    'DT Money é gestão financeira eficiente.',
    'https://github.com/rodrigojsdeveloper/dt-money',
  ),
  createProject(
    iweather,
    'iWeather',
    'iWeather previsão do tempo intuitiva e precisa.',
    'https://github.com/rodrigojsdeveloper/iweather',
  ),
  createProject(
    todo,
    'ToDo',
    'ToDo simplificada com tags e exclusão.',
    'https://github.com/rodrigojsdeveloper/todo',
  ),
]

const initialHomeProjects: IProjectProps[] = [projects[0], projects[4]]

export { projects, initialHomeProjects }
