import Paragraphy from '@/components/Paragraphy'
import CustomLink from '@/components/CustomLink'

const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-5 pt-8 lg:h-[30rem] lg:justify-center lg:pt-0">
      <Paragraphy
        text="The page you are trying to access does not exist."
        style="text-center"
      />

      <CustomLink
        href=""
        Icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path
              fill="#8c8c8c"
              className="h-5 w-5 duration-300 group-hover:fill-white"
              d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z"
            />
          </svg>
        }
        text="Go back"
        style="max-w-[7.563rem] text-color-paragraphy justify-center"
      />
    </div>
  )
}

export default NotFound
