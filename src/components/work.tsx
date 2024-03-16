import Link from 'next/link'
import { translate } from '@/i18n'
import { Paragraph } from './paragraph'
import { SubTitle } from './subtitle'

export const Work = () => {
  return (
    <section className="flex flex-col gap-y-2 rounded-radius border border-solid border-border p-4 sm:gap-y-4 sm:p-5">
      <SubTitle title={translate('home.work.title')} />
      <Paragraph text={translate('home.work.description')} />
      <Link
        href="/connect"
        className="group mt-1.5 flex h-11 w-full max-w-[6.5rem] select-none items-center justify-center gap-1.5 rounded-radius border border-solid border-border text-sm text-foreground hover:bg-hover focus-visible:bg-hover sm:mt-0 sm:max-w-[7.563rem] sm:text-base"
      >
        {translate('home.work.link')}
      </Link>
    </section>
  )
}
