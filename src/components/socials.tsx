import { Social } from './social'
import { LINKS } from '@/data/links'

export const Socials = () => {
  return (
    <ul className="flex flex-wrap gap-5">
      {LINKS.socials.map((social, index) => (
        <Social
          key={index}
          title={social.title}
          link={social.link}
          icon={social.icon}
        />
      ))}
    </ul>
  )
}
