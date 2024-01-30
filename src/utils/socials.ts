import {
  About,
  Contact,
  GitHub,
  Home,
  Instagram,
  LinkedIn,
  Projects,
} from '@/svgs'
import { ISocialProps } from '@/interfaces'

const socials: ISocialProps[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/rodrigojsdeveloper',
    svg: GitHub,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rodrigo-de-jesus-silva',
    svg: LinkedIn,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/eurodrigojs',
    svg: Instagram,
  },
]

export const LINKS = {
  website: [
    {
      href: '',
      title: 'Início',
      svg: Home,
    },
    {
      href: 'about',
      title: 'Sobre',
      svg: About,
    },
    {
      href: 'projects',
      title: 'Projetos',
      svg: Projects,
    },
    {
      href: 'contact',
      title: 'Contato',
      svg: Contact,
    },
  ],
}

export default socials
