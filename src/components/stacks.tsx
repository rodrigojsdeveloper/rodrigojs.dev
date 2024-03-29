'use client'

import { stacks } from '@/data/stacks'
import { SubTitle } from './subtitle'
import { array } from '@/utils/array'
import { Stack } from './stack'
import { cn } from '@/utils/cn'
import { StacksProps } from '@/interfaces'
import { translate } from '@/i18n'

export const Stacks = ({ pauseOnHover }: StacksProps) => {
  return (
    <section className="flex w-full flex-col gap-2 rounded-radius sm:gap-6">
      <SubTitle title={translate('about.skills')} />
      <div className="group relative flex gap-3 overflow-hidden lg:m-auto lg:w-[40.625rem]">
        {array(0, 2).map((index) => (
          <ul
            key={index}
            className={cn(
              'flex animate-slide justify-around gap-3',
              pauseOnHover && 'group-hover:paused',
            )}
            data-testid={`slider-child-${index + 1}`}
          >
            {stacks.map((stack, index) => (
              <Stack icon={stack.icon} bg={stack.bg} key={index} />
            ))}
          </ul>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-fade-gradient" />
      </div>
    </section>
  )
}
