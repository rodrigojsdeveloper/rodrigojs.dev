import Paragraphy from './Paragraphy'
import Link from 'next/link'

const Work = () => {
  return (
    <div className="my-6 flex w-full flex-col gap-4 rounded-def border border-gray-4 bg-gray-7 p-5">
      <p className="font-title text-xl">Let{"'"}s work together!</p>

      <Paragraphy
        text="If you're interested in my work or want to provide feedback on this site, let's have a chat."
        style="text-md"
      />

      <Link
        href="/contact"
        className="text-md flex h-44 w-full max-w-121 items-center justify-center rounded-def bg-gray-1 font-normal text-gray-7 hover:bg-button-1 active:bg-button-2"
      >
        Contact me
      </Link>
    </div>
  )
}

export default Work
