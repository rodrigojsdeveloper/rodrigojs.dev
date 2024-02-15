import mathematical from '@/assets/mathematical.png'
import motorsShop from '@/assets/motors-shop.png'
import devFinder from '@/assets/devfinder.png'
import geography from '@/assets/geography.png'
import iweather from '@/assets/iweather.png'
import dtMoney from '@/assets/dt-money.png'

import { ProjectProps } from '@/interfaces'
import { StaticImageData } from 'next/image'
import { translate } from '@/i18n'

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
    translate('projects.motors_shop.title'),
    'https://github.com/rodrigojsdeveloper/motors-shop',
  ),
  createProject(
    geography,
    translate('projects.geography.title'),
    'https://github.com/rodrigojsdeveloper/geography',
  ),
  createProject(
    devFinder,
    translate('projects.devfinder.title'),
    'https://github.com/rodrigojsdeveloper/devfinder',
  ),
  createProject(
    mathematical,
    translate('projects.mathematical.title'),
    'https://github.com/rodrigojsdeveloper/mathematical',
  ),
  createProject(
    iweather,
    translate('projects.iweather.title'),
    'https://github.com/rodrigojsdeveloper/iweather',
  ),
  createProject(
    dtMoney,
    translate('projects.dtmoney.title'),
    'https://github.com/rodrigojsdeveloper/dt-money',
  ),
]

export const initialHomeProject: ProjectProps = projects[3]
