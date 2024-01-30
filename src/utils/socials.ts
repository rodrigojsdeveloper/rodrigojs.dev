import { GitHub, Instagram, LinkedIn } from '@/svgs'
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

export default socials
