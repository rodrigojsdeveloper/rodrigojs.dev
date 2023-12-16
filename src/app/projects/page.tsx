import Paragraphy from '@/components/Paragraphy'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import List from '@/components/List'

const Projects = () => {
  return (
    <section className="mt-6 flex w-full max-w-none animate-up flex-col gap-y-6 lg:mt-0 lg:max-w-800">
      <Title title="Projects" />
      <Paragraphy text="I'm passionate about creating new projects as it's the prime way to acquire knowledge. On this page, you can browse through several sites I've developed." />
      <List>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </List>

      <Footer />
    </section>
  )
}

export default Projects
