import GroupedItems from '@/components/GroupedItems'
import Paragraph from '@/components/Paragraph'
import SubTitle from '@/components/SubTitle'
import Stack from '@/components/Stack'
import Title from '@/components/Title'
import Line from '@/components/Line'
import stacks from '@/utils/stacks'
import Link from 'next/link'

const About = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="About" />
        <div className="space-y-3 leading-7">
          <Paragraph text="I specialize in creating and optimizing user experiences in interface development. My expertise covers the conception, design, and implementation of visual elements for intuitive interactions. My advanced skills include requirements analysis, innovative design solutions, and seamless integration of front-end components." />

          <Paragraph text="I have experience in frontend projects, developing interactive and responsive applications for various devices. Additionally, I am familiar with backend development, creating efficient server-side solutions, and mobile app development for both Android and iOS platforms." />

          <Paragraph text="Additionally, I possess knowledge in DevOps, including continuous integration and delivery, and infrastructure process automation. I am committed to enhancing my technical skills to lead projects that result in attractive, functional, high-performance interfaces, aiming to provide users with an effective and memorable digital experience." />
        </div>
      </div>

      <div className="flex w-full items-center gap-2">
        <Link
          href="/pdfs/curriculo-rodrigo.pdf"
          download
          className="group flex h-11 w-full max-w-[9.375rem] select-none items-center justify-center gap-1.5 rounded-def border border-solid border-gray-200 p-2 text-sm font-medium text-gray-100 hover:bg-gray-200 hover:text-primary active:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M14.4375 8.25H16.1562C16.6121 8.25 17.0493 8.43108 17.3716 8.75341C17.6939 9.07574 17.875 9.51291 17.875 9.96875V18.2188C17.875 18.6746 17.6939 19.1118 17.3716 19.4341C17.0493 19.7564 16.6121 19.9375 16.1562 19.9375H5.84375C5.38791 19.9375 4.95074 19.7564 4.62841 19.4341C4.30608 19.1118 4.125 18.6746 4.125 18.2188V9.96875C4.125 9.51291 4.30608 9.07574 4.62841 8.75341C4.95074 8.43108 5.38791 8.25 5.84375 8.25H7.5625M14.4375 5.5L11 2.0625M11 2.0625L7.5625 5.5M11 2.0625V13.793"
              stroke="#888888"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="duration-300 group-hover:stroke-primary group-active:stroke-primary"
            />
          </svg>{' '}
          CV Download
        </Link>
      </div>
      <Line />
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-1.5 sm:gap-y-3">
          <SubTitle title="Skills" />
          <Paragraph text="My technical knowledge." />
        </div>

        <GroupedItems>
          {stacks.map((stack, index) => (
            <Stack src={stack.src} name={stack.name} key={index} />
          ))}
        </GroupedItems>
      </div>
    </div>
  )
}

export default About
