import Paragraph from '@/components/Paragraph'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Title from '@/components/Title'
import List from '@/components/List'

const Projects = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Projects" />
        <Paragraph text="I'm passionate about creating new projects as it's the prime way to acquire knowledge. On this page, you can browse through several sites I've developed." />
      </div>
      <List>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </List>
    </div>
  )
}

export default Projects
