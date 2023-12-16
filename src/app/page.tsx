import { initialHomeProjects } from '@/utils/projects'
import Paragraphy from '@/components/Paragraphy'
import SubTitle from '@/components/SubTitle'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Work from '@/components/Work'
import List from '@/components/List'
import Link from 'next/link'

const Home = () => {
  return (
    <section className="mt-6 flex w-full max-w-none animate-up flex-col gap-y-6 lg:mt-0 lg:max-w-800">
      <div className="flex flex-col gap-y-2">
        <Title title="Full Stack Developer" />

        <div className="flex items-center gap-x-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#8C8C8C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
            </g>
          </svg>

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
            className="hover:text-primary flex items-center gap-1 text-xs font-medium text-color-paragraphy active:opacity-50"
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
                stroke="rgb(140, 140, 140)"
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
      <Footer />
    </section>
  )
}

export default Home
