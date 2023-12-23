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
            className="flex select-none items-center gap-1 text-xs font-medium text-gray-100 active:opacity-50"
          >
            See all{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.5855 9.39798L10.523 14.4605C10.4174 14.566 10.2743 14.6253 10.125 14.6253C9.97573 14.6253 9.83258 14.566 9.72703 14.4605C9.62148 14.3549 9.56219 14.2118 9.56219 14.0625C9.56219 13.9132 9.62148 13.7701 9.72703 13.6645L13.8298 9.56251H2.8125C2.66332 9.56251 2.52024 9.50324 2.41475 9.39776C2.30926 9.29227 2.25 9.14919 2.25 9.00001C2.25 8.85082 2.30926 8.70775 2.41475 8.60226C2.52024 8.49677 2.66332 8.43751 2.8125 8.43751H13.8298L9.72703 4.33548C9.62148 4.22993 9.56219 4.08677 9.56219 3.93751C9.56219 3.78824 9.62148 3.64509 9.72703 3.53954C9.83258 3.43399 9.97573 3.37469 10.125 3.37469C10.2743 3.37469 10.4174 3.43399 10.523 3.53954L15.5855 8.60204C15.6378 8.65428 15.6793 8.71632 15.7076 8.7846C15.7359 8.85289 15.7504 8.92609 15.7504 9.00001C15.7504 9.07393 15.7359 9.14713 15.7076 9.21541C15.6793 9.2837 15.6378 9.34574 15.5855 9.39798Z"
                fill="#888888"
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
