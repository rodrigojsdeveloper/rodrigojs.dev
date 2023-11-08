import Paragraphy from '@/components/Paragraphy'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import List from '@/components/List'

const Projects = () => {
  return (
    <section className="flex w-full max-w-800 animate-up flex-col gap-y-6 max-lg:mt-6 max-lg:max-w-none">
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
