import GroupedItems from './GroupedItems'
import SocialMedia from './SocialMedia'
import LINKS from '@/utils/links'

const SocialNetworks = () => {
  return (
    <GroupedItems>
      {LINKS.socials.map((social, index) => (
        <SocialMedia key={index} social={social} />
      ))}
    </GroupedItems>
  )
}

export default SocialNetworks
