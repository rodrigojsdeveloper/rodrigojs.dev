import Paragraph from '@/components/Paragraph'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Title from '@/components/Title'
import List from '@/components/List'

const Projects = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title="Projetos" />
        <Paragraph text="Tenho satisfação em iniciar novos projetos, pois considero essa a principal maneira de ampliar meu conhecimento. Nesta página você pode navegar por diversos sites que desenvolvi." />
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
