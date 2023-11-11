import linkedin from '@/assets/networks/linkedin.svg'
import discord from '@/assets/networks/discord.svg'
import github from '@/assets/networks/github.svg'

import { ILinkProps } from '@/interfaces'

const links: ILinkProps[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/rodrigojsdeveloper/',
    img: github,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rodrigo-de-jesus-silva/',
    img: linkedin,
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/QqFzbm6Prr',
    img: discord,
  },
]

export default links
