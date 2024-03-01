import { LinksProps } from '@/interfaces'
import { translate } from '@/i18n'
import {
  Home,
  CircleUserRound,
  PanelsTopLeft,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Github,
  Sun,
  Moon,
  Laptop,
  Globe,
  Globe2,
  Church,
  PlusCircle,
} from 'lucide-react'

export const LINKS: LinksProps = {
  website: [
    {
      href: '',
      title: translate('links.home'),
      icon: Home,
    },
    {
      href: 'about',
      title: translate('links.about'),
      icon: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      icon: PanelsTopLeft,
    },
    {
      href: 'connect',
      title: translate('links.connect'),
      icon: ArrowUpRight,
    },
  ],
  mobile_website: [
    {
      href: 'about',
      title: translate('links.about'),
      icon: CircleUserRound,
    },
    {
      href: 'projects',
      title: translate('links.projects'),
      icon: PanelsTopLeft,
    },
    {
      href: 'connect',
      title: translate('links.connect'),
      icon: ArrowUpRight,
    },
  ],
  languages: [
    {
      locale: 'pt-BR',
      title: translate('links.portuguese'),
      icon: Globe,
    },
    {
      locale: 'en-US',
      title: translate('links.english'),
      icon: Globe,
    },
  ],
  themes: [
    {
      theme: 'light',
      title: translate('links.light'),
      icon: Sun,
    },
    {
      theme: 'dark',
      title: translate('links.dark'),
      icon: Moon,
    },
    {
      theme: 'system',
      title: translate('links.system'),
      icon: Laptop,
    },
  ],
  lastest_projects: [
    {
      link: 'https://catholiccommunity.social',
      title: 'Catholic Community',
      icon: Church,
    },
    {
      link: 'https://geography-plus.vercel.app',
      title: 'Geography',
      icon: Globe2,
    },
    {
      link: 'https://mathematical.vercel.app',
      title: 'Mathematical',
      icon: PlusCircle,
    },
  ],
  socials: [
    {
      link: 'https://github.com/rodrigojsdeveloper',
      title: 'GitHub',
      icon: Github,
    },
    {
      link: 'https://www.linkedin.com/in/rodrigojsdeveloper',
      title: 'LinkedIn',
      icon: Linkedin,
    },
    {
      link: 'https://www.instagram.com/eurodrigojs',
      title: 'Instagram',
      icon: Instagram,
    },
  ],
}
