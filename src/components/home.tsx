'use client'

import { initialHomeProject } from '@/data/projects'
import { Paragraph } from '@/components/paragraph'
import { SubTitle } from '@/components/subtitle'
import { Project } from '@/components/project'
import { ArrowRight } from 'lucide-react'
import { Title } from '@/components/title'
import { Work } from '@/components/work'
import Link from 'next/link'
import { translate } from '@/i18n'

export const Home = () => {
  return (
    <div className="flex animate-up flex-col gap-y-4 sm:gap-y-6">
      <Title title={translate('home.title')} />

      <Paragraph text={translate('home.description')} />

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <SubTitle title={translate('home.recent_projects')} />

          <Link
            href="/projects"
            className="flex select-none items-center gap-1 text-xs font-medium text-foreground-muted focus-visible:opacity-50 active:opacity-50"
          >
            {translate('home.see_all')}{' '}
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <Project
        img={initialHomeProject.img}
        title={initialHomeProject.title}
        description={initialHomeProject.description}
        link={initialHomeProject.link}
      />

      <Work />
    </div>
  )
}
