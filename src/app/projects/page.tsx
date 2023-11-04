import Paragraphy from '@/components/Paragraphy'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Title from '@/components/Title'

const Projects = () => {
  return (
    <>
      <Title title="Projects" />
      <Paragraphy text="I'm passionate about creating new projects as it's the prime way to acquire knowledge. On this page, you can browse through several sites I've developed." />
      <menu className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </menu>

      <Footer />
    </>
  )
}

export default Projects
