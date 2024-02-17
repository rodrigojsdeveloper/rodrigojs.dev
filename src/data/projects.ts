import { StaticImageData } from 'next/image'
import { ProjectProps } from '@/interfaces'

import mathematical from '@/assets/mathematical.png'
import motorsShop from '@/assets/motors-shop.png'
import devFinder from '@/assets/devfinder.png'
import geography from '@/assets/geography.png'
import iweather from '@/assets/iweather.png'
import dtMoney from '@/assets/dt-money.png'

const createProject = (
  img: StaticImageData,
  title: string,
  link: string,
): ProjectProps => {
  return { img, title, link }
}

export const projects: ProjectProps[] = [
  createProject(
    motorsShop,
    'Motors Shop',
    'https://github.com/rodrigojsdeveloper/motors-shop',
  ),
  createProject(
    geography,
    'Geography',
    'https://github.com/rodrigojsdeveloper/geography',
  ),
  createProject(
    devFinder,
    'devFinder',
    'https://github.com/rodrigojsdeveloper/devfinder',
  ),
  createProject(
    mathematical,
    'Mathematical',
    'https://github.com/rodrigojsdeveloper/mathematical',
  ),
  createProject(
    iweather,
    'iWeather',
    'https://github.com/rodrigojsdeveloper/iweather',
  ),
  createProject(
    dtMoney,
    'DT Money',
    'https://github.com/rodrigojsdeveloper/dt-money',
  ),
]

export const initialHomeProject: ProjectProps = projects[3]
