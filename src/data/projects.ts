import { StaticImageData } from 'next/image'
import { ProjectProps } from '@/interfaces'
import catholicCommunity from '@/assets/catholic-community.png'
import mathematical from '@/assets/mathematical.png'
import todo from '@/assets/todo.png'
import devFinder from '@/assets/devfinder.png'
import geography from '@/assets/geography.png'
import iweather from '@/assets/iweather.png'

const createProject = (
  img: StaticImageData,
  title: string,
  link: string,
): ProjectProps => {
  return { img, title, link }
}

export const projects: ProjectProps[] = [
  createProject(
    catholicCommunity,
    'Catholic Community',
    'https://catholiccommunity.social',
  ),
  createProject(geography, 'Geography', 'https://geography-plus.vercel.app'),
  createProject(todo, 'ToDo', 'https://todo-boost.vercel.app'),
  createProject(devFinder, 'devFinder', 'https://devfinder-plus.vercel.app'),
  createProject(
    mathematical,
    'Mathematical',
    'https://mathematical.vercel.app',
  ),
  createProject(iweather, 'iWeather', 'https://iweather-plus.vercel.app'),
]

export const initialHomeProject: ProjectProps = projects[0]
