import { initialHomeProjects } from '@/utils/projects'
import HeaderMobile from '@/components/HeaderMobile'
import Paragraphy from '@/components/Paragraphy'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Title from '@/components/Title'
import Line from '@/components/Line'
import Work from '@/components/Work'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="m-auto flex w-full max-w-6xl flex-row gap-x-10 px-8 pb-8 pt-28 max-lg:min-h-0 max-lg:justify-center max-lg:pb-5 max-lg:pt-24 max-sm:px-5">
      <Header />
      <HeaderMobile />

      <section className="w-full max-w-800 animate-up max-lg:mt-6 max-lg:max-w-none">
        <Title title="Full Stack Developer" />

        <div className="my-2 flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#d4d4d4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
            </g>
          </svg>

          <p className="text-sm font-normal text-neutral-300">
            São Paulo - Brazil
          </p>
        </div>

        <Paragraphy
          text="As a full-stack developer, my goal is to craft digital experiences
          that seamlessly blend elegant aesthetics with exceptional
          functionality, both on the front-end and back-end. I'm passionate
          about translating ideas into intuitive, visually appealing user
          interfaces while ensuring the technical aspects of the system are
          robust and efficient."
          style="text-md my-6"
        />

        <Line />

        <div className="flex w-full items-center justify-between">
          <p className="font-title text-xl">Recent projects</p>

          <Link
            href="/projects"
            className="hover:text-primary flex items-center gap-1 text-xs font-medium  text-neutral-300 active:opacity-50"
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
                stroke="#d4d4d4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </Link>
        </div>

        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {initialHomeProjects.map((project, key) => (
            <Project project={project} key={key} />
          ))}
        </div>

        <Line />

        <Work />
        <Footer />
      </section>
    </main>
  )
}
