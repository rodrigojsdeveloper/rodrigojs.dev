import { translate } from '@/i18n'
import { Paragraph } from './paragraph'
import { SubTitle } from './subtitle'
import Link from 'next/link'

export const Work = () => {
  return (
    <section className="flex flex-col gap-y-2 rounded-radius border border-solid border-border p-5 sm:gap-y-4">
      <SubTitle title={translate('home.work.title')} />

      <Paragraph text={translate('home.work.description')} />

      <Link
        href="/contact"
        className="group mt-1.5 flex h-[2.4rem] w-full max-w-[6.5rem] select-none items-center justify-center gap-1.5 rounded-radius border border-solid border-border text-sm text-foreground hover:bg-border sm:mt-0 sm:h-11 sm:max-w-[7.563rem] sm:text-base"
      >
        {translate('home.work.link')}
      </Link>
    </section>
  )
}
