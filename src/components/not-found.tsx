'use client'

import { CustomLink } from '@/components/custom-link'
import { Paragraph } from '@/components/paragraph'
import { MoveLeft } from 'lucide-react'
import { translate } from '@/i18n'

export const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-5 pt-8 lg:h-[30rem] lg:justify-center lg:pt-0">
      <Paragraph
        text={translate('notFound.description')}
        className="text-center"
      />

      <CustomLink
        href=""
        Icon={
          <MoveLeft
            size={18}
            strokeWidth={1.5}
            className="duration-300 group-hover:-translate-x-0.5"
          />
        }
        text={translate('notFound.go_back')}
        className="max-w-[7.563rem] justify-center text-foreground-muted"
        isLink
      />
    </div>
  )
}
