import { initialHomeProjects } from '@/utils/projects'
import Paragraph from '@/components/Paragraph'
import SubTitle from '@/components/SubTitle'
import Project from '@/components/Project'
import Title from '@/components/Title'
import Work from '@/components/Work'
import List from '@/components/List'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <Title title="Desenvolvedor Full Stack" />

      <Paragraph
        text="
        Como desenvolvedor full stack, concebo experiências digitais que combinam perfeitamente estética elegante e funcionalidade, tanto no front-end quanto no back-end. Minhas motivações incluem a tradução de ideias em interfaces intuitivas e visualmente atrativas, assegurando eficiência nos aspectos técnicos do sistema."
      />

      <div className="flex flex-col gap-y-3">
        <div className="flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <SubTitle title="Projetos recentes" />

          <Link
            href="/projects"
            className="flex select-none items-center gap-1.5 text-xs font-medium text-gray-100 active:opacity-50"
          >
            Ver todos{' '}
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
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
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

      <Work />
    </div>
  )
}

export default Home
