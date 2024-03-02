'use client'

import { Paragraph } from '@/components/paragraph'
import { Project } from '@/components/project'
import { projects } from '@/data/projects'
import { Title } from '@/components/title'
import { List } from '@/components/list'
import { translate } from '@/i18n'

export const Projects = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-5">
      <Title title={translate('projects.title')} />
      <Paragraph text={translate('projects.description')} />
      <List>
        {projects.map((project, index) => (
          <Project
            img={project.img}
            title={project.title}
            link={project.link}
            key={index}
          />
        ))}
      </List>
    </div>
  )
}
