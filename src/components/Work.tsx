import Paragraphy from './Paragraphy'
import SubTitle from './SubTitle'
import Link from 'next/link'

const Work = () => {
  return (
    <div className="my-6 flex w-full flex-col gap-4 rounded-def border border-solid border-gray-2 bg-neutral-900 p-5">
      <SubTitle title="Let's work together!" />

      <Paragraphy text="If you're interested in my work or want to provide feedback on this site, let's have a chat." />

      <Link
        href="/contact"
        className="flex h-11 w-full max-w-121 items-center justify-center rounded-def bg-white text-neutral-900 hover:opacity-80 active:opacity-50"
      >
        Contact me
      </Link>
    </div>
  )
}

export default Work
