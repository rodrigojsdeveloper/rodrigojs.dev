import { initialHomeProjects } from '@/utils/projects'
import Paragraph from '@/components/Paragraph'
import SubTitle from '@/components/SubTitle'
import Project from '@/components/Project'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Work from '@/components/Work'
import List from '@/components/List'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <Title title="Full Stack Developer" />

      <Paragraph
        text="
        Dedicated full-stack developer creating digital experiences that seamlessly blend elegant aesthetics and exceptional functionality on both front-end and back-end. Passionate about translating ideas into intuitive and visually appealing interfaces, ensuring robustness and efficiency in the technical aspects of the system."
      />

      <div className="flex flex-col gap-y-3">
        <Line />

        <div className="flex w-full items-center justify-between">
          <SubTitle title="Recent projects" />

          <Link
            href="/projects"
            className="hover:text-primary flex select-none items-center gap-1 text-xs font-medium text-color-paragraph active:opacity-50"
          >
            See all{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#888888"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              />
            </svg>
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
