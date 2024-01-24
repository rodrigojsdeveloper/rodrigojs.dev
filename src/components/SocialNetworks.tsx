import socialMedia from '@/utils/socialMedia'
import GroupedItems from './GroupedItems'
import SocialMedia from './SocialMedia'

const SocialNetworks = () => {
  return (
    <GroupedItems>
      {socialMedia.map((media, index) => (
        <SocialMedia key={index} media={media} />
      ))}
    </GroupedItems>
  )
}

export default SocialNetworks
