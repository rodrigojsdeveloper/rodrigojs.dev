import { translate } from '@/i18n'
import { Brazil } from '@/svgs/Brazil'
import { EUA } from '@/svgs/EUA'
import {
  Home,
  CircleUserRound,
  PanelsTopLeft,
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
      title: translate('links.home'),
      svg: Home,
    },
    {
      href: 'about',
      title: translate('links.about'),
      svg: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      svg: PanelsTopLeft,
    },
    {
      href: 'contact',
      title: translate('links.contact'),
      svg: MessageCircle,
    },
  ],
  mobile_website: [
    {
      href: 'about',
      title: translate('links.about'),
      svg: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      svg: PanelsTopLeft,
    },
    {
      href: 'contact',
      title: translate('links.contact'),
      svg: MessageCircle,
    },
  ],
  themes: [
    {
      theme: 'light',
      title: translate('links.light'),
      svg: Sun,
    },
    {
      theme: 'dark',
      title: translate('links.dark'),
      svg: Moon,
    },
    {
      theme: 'system',
      title: translate('links.system'),
      svg: Laptop,
    },
  ],
  languages: [
    {
      locale: 'pt-BR',
      title: translate('links.portuguese'),
      svg: Brazil,
    },
    {
      locale: 'en-US',
      title: translate('links.english'),
      svg: EUA,
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

export { LINKS }
