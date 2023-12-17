import { initialHomeProjects } from '@/utils/projects'
import Paragraphy from '@/components/Paragraphy'
import SubTitle from '@/components/SubTitle'
import Project from '@/components/Project'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Work from '@/components/Work'
import List from '@/components/List'
import Link from 'next/link'
import Image from 'next/image'
import arrowRight from '@/assets/others/arrow-right.svg'
import world from '@/assets/others/world.svg'

const Home = () => {
  return (
    <div className="flex animate-up flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Title title="Full Stack Developer" />

        <div className="flex items-center gap-x-1.5">
          <Image src={world} alt="world" priority />

          <p className="text-sm text-color-paragraphy">São Paulo - Brazil</p>
        </div>
      </div>

      <Paragraphy
        text="
        Dedicated full-stack developer creating digital experiences that seamlessly blend elegant aesthetics and exceptional functionality on both front-end and back-end. Passionate about translating ideas into intuitive and visually appealing interfaces, ensuring robustness and efficiency in the technical aspects of the system."
      />

      <div className="flex flex-col gap-y-3">
        <Line />

        <div className="flex w-full items-center justify-between">
          <SubTitle title="Recent projects" />

          <Link
            href="/projects"
            className="hover:text-primary flex select-none items-center gap-1 text-xs font-medium text-color-paragraphy active:opacity-50"
          >
            See all <Image src={arrowRight} alt="arrow right" priority />
          </Link>
        </div>
      </div>

      <List>
        {initialHomeProjects.map((project, key) => (
          <Project project={project} key={key} />
        ))}
      </List>

      <Line />
      <Work />
    </div>
  )
}

export default Home
