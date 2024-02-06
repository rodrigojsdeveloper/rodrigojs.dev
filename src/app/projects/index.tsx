'use client'

import Paragraph from '@/components/Paragraph'
import { projects } from '@/utils/projects'
import Project from '@/components/Project'
import Title from '@/components/Title'
import List from '@/components/List'
import { translate } from '@/i18n'

const Projects = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <div className="flex flex-col gap-y-3 sm:gap-y-6">
        <Title title={translate('projects.title')} />
        <Paragraph text={translate('projects.description')} />
      </div>
      <List>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </List>
    </div>
  )
}

export { Projects }
