import { translate } from '@/i18n'
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
      title: translate('links.light'),
      theme: 'light',
      svg: Sun,
    },
    {
      title: translate('links.dark'),
      theme: 'dark',
      svg: Moon,
    },
    {
      title: translate('links.system'),
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

export { LINKS }
