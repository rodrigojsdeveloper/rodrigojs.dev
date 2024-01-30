import {
  About,
  Contact,
  GitHub,
  Home,
  Instagram,
  Laptop,
  LinkedIn,
  Moon,
  Projects,
  Sun,
} from '@/svgs'

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
  themes: [
    {
      title: 'Claro',
      setTheme: (setTheme: (theme: string) => void) => setTheme('light'),
      svg: Sun,
    },
    {
      title: 'Escuro',
      setTheme: (setTheme: (theme: string) => void) => setTheme('dark'),
      svg: Moon,
    },
    {
      title: 'Sistema',
      setTheme: (setTheme: (theme: string) => void) => setTheme('system'),
      svg: Laptop,
    },
  ],
  socials: [
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
  ],
}

export default LINKS
