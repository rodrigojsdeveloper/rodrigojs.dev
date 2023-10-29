import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import CustomLink from '@/components/CustomLink'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <main className="relative m-auto flex w-full max-w-6xl flex-row justify-between px-8 pb-16 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5">
      <Header />
      <HeaderMobile />

      <div className="mt-64 flex w-full max-w-800 animate-up flex-col items-center gap-4 text-center max-lg:mt-6 max-lg:max-w-none">
        <Paragraphy
          text="The page you are trying to access does not exist."
          style="text-md"
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
                fill="#d4d4d4"
                d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z"
              />
            </svg>
          }
          text="Go back"
          activeLink="max-w-121 text-gray-2 justify-center"
        />
      </div>
    </main>
  )
}
