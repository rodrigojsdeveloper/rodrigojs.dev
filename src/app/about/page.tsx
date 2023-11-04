import Paragraphy from '@/components/Paragraphy'
import ButtonCopy from '@/components/ButtonCopy'
import SubTitle from '@/components/SubTitle'
import Footer from '@/components/Footer'
import Stack from '@/components/Stack'
import Title from '@/components/Title'
import Line from '@/components/Line'
import stacks from '@/utils/stacks'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <Title title="About" />
      <div className="space-y-3 leading-7">
        <Paragraphy text="I specialize in creating and optimizing user experiences in interface development. My expertise covers the conception, design, and implementation of visual elements for intuitive interactions. My advanced skills include requirements analysis, innovative design solutions, and seamless integration of front-end components." />

        <Paragraphy text="I have experience in front-end projects using technologies such as HTML, CSS, JavaScript, TypeScript, and React, which are essential for interactive and responsive applications across various devices and browsers." />

        <Paragraphy text="Additionally, I possess knowledge in DevOps, including continuous integration and delivery, and infrastructure process automation. I am committed to enhancing my technical skills to lead projects that result in attractive, functional, high-performance interfaces, aiming to provide users with an effective and memorable digital experience." />
      </div>
      <div className="flex w-full items-center gap-2">
        <Link
          href="/pdfs/curriculo-rodrigo.pdf"
          download
          className="flex h-11 w-full max-w-152 items-center justify-center rounded-def border border-solid border-gray-2 p-3 text-sm font-medium text-gray-1 hover:bg-gray-2"
        >
          CV Download
        </Link>
        <ButtonCopy />
      </div>
      <Line />
      <div className="flex flex-col gap-y-3">
        <SubTitle title="Skills" />

        <Paragraphy text="My technical knowledge." />

        <ul className="flex flex-wrap items-center gap-3">
          {stacks.map((stack, index) => (
            <Stack src={stack.src} name={stack.name} key={index} />
          ))}
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default About
