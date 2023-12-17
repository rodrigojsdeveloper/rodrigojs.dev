import Paragraphy from '@/components/Paragraphy'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import arrowLeft from '@/assets/others/arrow-left.svg'

const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-6">
      <div className="m-auto flex flex-col items-center gap-y-5 pt-8 lg:pt-0">
        <Paragraphy
          text="The page you are trying to access does not exist."
          style="text-center"
        />

        <CustomLink
          href=""
          Icon={<Image src={arrowLeft} alt="arrow left" priority />}
          text="Go back"
          activeLink="max-w-121 text-color-paragraphy justify-center"
        />
      </div>
    </div>
  )
}

export default NotFound
