import socials from '@/utils/socials'
import GroupedItems from './GroupedItems'
import SocialMedia from './SocialMedia'

const SocialNetworks = () => {
  return (
    <GroupedItems>
      {socials.map((media, index) => (
        <SocialMedia key={index} media={media} />
      ))}
    </GroupedItems>
  )
}

export default SocialNetworks
