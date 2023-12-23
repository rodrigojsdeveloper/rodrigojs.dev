import Paragraph from './Paragraph'
import SubTitle from './SubTitle'
import Link from 'next/link'

const Work = () => {
  return (
    <div className="flex w-full flex-col gap-y-2 rounded-def border border-solid border-gray-200 bg-gray-300 p-5 sm:gap-y-4">
      <SubTitle title="Let's work together!" />

      <Paragraph text="If you're interested in my work or want to provide feedback on this site, let's have a chat." />

      <Link
        href="/contact"
        className="text-primary mt-1.5 flex h-11 w-full max-w-[7.563rem] select-none items-center justify-center rounded-def bg-active hover:opacity-80 active:opacity-50 sm:mt-0"
      >
        Contact me
      </Link>
    </div>
  )
}

export default Work
