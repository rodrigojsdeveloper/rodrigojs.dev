import GroupedItems from './GroupedItems'
import SocialMedia from './SocialMedia'
import links from '@/utils/links'

const SocialNetworks = () => {
  return (
    <GroupedItems>
      {links.map((link, index) => (
        <SocialMedia key={index} link={link} />
      ))}
    </GroupedItems>
  )
}

export default SocialNetworks
