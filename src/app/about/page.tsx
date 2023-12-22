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
          className="flex h-11 w-full max-w-[8.75rem] select-none items-center justify-center rounded-def border border-solid border-line p-3 text-sm font-medium text-color-paragraph hover:bg-line hover:text-zinc-50"
        >
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
