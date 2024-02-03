import {
  Home,
  CircleUserRound,
  KanbanSquare,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  Sun,
  Moon,
  Laptop,
} from 'lucide-react'

const LINKS = {
  website: [
    {
      href: '',
      title: 'Início',
      svg: Home,
    },
    {
      href: 'about',
      title: 'Sobre',
      svg: CircleUserRound,
    },
    {
      href: 'projects',
      title: 'Projetos',
      svg: KanbanSquare,
    },
    {
      href: 'contact',
      title: 'Contato',
      svg: MessageCircle,
    },
  ],
  mobile_website: [
    {
      href: 'about',
      title: 'Sobre',
      svg: CircleUserRound,
    },
    {
      href: 'projects',
      title: 'Projetos',
      svg: KanbanSquare,
    },
    {
      href: 'contact',
      title: 'Contato',
      svg: MessageCircle,
    },
  ],
  themes: [
    {
      title: 'Claro',
      theme: 'light',
      svg: Sun,
    },
    {
      title: 'Escuro',
      theme: 'dark',
      svg: Moon,
    },
    {
      title: 'Sistema',
      theme: 'system',
      svg: Laptop,
    },
  ],
  socials: [
    {
      name: 'GitHub',
      link: 'https://github.com/rodrigojsdeveloper',
      svg: Github,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rodrigo-de-jesus-silva',
      svg: Linkedin,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/eurodrigojs',
      svg: Instagram,
    },
  ],
}

export default LINKS
