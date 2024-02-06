'use client'

import { initialHomeProjects } from '@/utils/projects'
import { Paragraph } from '@/components/Paragraph'
import { SubTitle } from '@/components/SubTitle'
import { Project } from '@/components/Project'
import { MoveRight } from 'lucide-react'
import { Title } from '@/components/Title'
import { Work } from '@/components/Work'
import { List } from '@/components/List'
import Link from 'next/link'
import { translate } from '@/i18n'

const Home = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <Title title={translate('home.title')} />

      <Paragraph text={translate('home.description')} />

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <SubTitle title={translate('home.recent_projects')} />

          <Link
            href="/projects"
            className="flex select-none items-center gap-1.5 text-xs font-medium text-muted-foreground active:opacity-50"
          >
            {translate('home.see_all')}{' '}
            <MoveRight size={18} strokeWidth={1.5} />
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

export { Home }
