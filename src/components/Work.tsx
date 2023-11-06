import Paragraphy from './Paragraphy'
import SubTitle from './SubTitle'
import Link from 'next/link'

const Work = () => {
  return (
    <div className="bg-dark-grey flex w-full flex-col gap-4 rounded-def border border-solid border-line p-5">
      <SubTitle title="Let's work together!" />

      <Paragraphy text="If you're interested in my work or want to provide feedback on this site, let's have a chat." />

      <Link
        href="/contact"
        className="text-dark-grey flex h-11 w-full max-w-121 items-center justify-center rounded-def bg-white hover:opacity-80 active:opacity-50"
      >
        Contact me
      </Link>
    </div>
  )
}

export default Work
