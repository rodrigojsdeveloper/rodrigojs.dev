import socials from '@/utils/socials'
import GroupedItems from './GroupedItems'
import SocialMedia from './SocialMedia'

const SocialNetworks = () => {
  return (
    <GroupedItems>
      {socials.map((social, index) => (
        <SocialMedia key={index} social={social} />
      ))}
    </GroupedItems>
  )
}

export default SocialNetworks
