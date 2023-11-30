import instagram from '@/assets/networks/instagram.svg'
import linkedin from '@/assets/networks/linkedin.svg'
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
    name: 'Instagram',
    link: 'https://www.instagram.com/eurodrigojs/',
    img: instagram,
  },
]

export default links
