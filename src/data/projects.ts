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
  description: string,
  link: string,
): ProjectProps => {
  return { img, title, description, link }
}

export const projects: ProjectProps[] = [
  createProject(
    motorsShop,
    translate('projects.motors_shop.title'),
    translate('projects.motors_shop.description'),
    'https://github.com/rodrigojsdeveloper/motors-shop',
  ),
  createProject(
    geography,
    translate('projects.geography.title'),
    translate('projects.geography.description'),
    'https://github.com/rodrigojsdeveloper/geography',
  ),
  createProject(
    devFinder,
    translate('projects.devfinder.title'),
    translate('projects.devfinder.description'),
    'https://github.com/rodrigojsdeveloper/devfinder',
  ),
  createProject(
    mathematical,
    translate('projects.mathematical.title'),
    translate('projects.mathematical.description'),
    'https://github.com/rodrigojsdeveloper/mathematical',
  ),
  createProject(
    iweather,
    translate('projects.iweather.title'),
    translate('projects.iweather.description'),
    'https://github.com/rodrigojsdeveloper/iweather',
  ),
  createProject(
    dtMoney,
    translate('projects.dtmoney.title'),
    translate('projects.dtmoney.description'),
    'https://github.com/rodrigojsdeveloper/dt-money',
  ),
]

export const initialHomeProject: ProjectProps = projects[1]
