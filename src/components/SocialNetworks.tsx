import { SocialMedia } from './SocialMedia'
import { LINKS } from '@/utils/links'

const SocialNetworks = () => {
  return (
    <ul className="flex flex-wrap gap-3 sm:gap-5">
      {LINKS.socials.map((social, index) => (
        <SocialMedia key={index} social={social} />
      ))}
    </ul>
  )
}

export { SocialNetworks }
