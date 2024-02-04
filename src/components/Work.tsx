import Paragraph from './Paragraph'
import SubTitle from './SubTitle'
import Link from 'next/link'

const Work = () => {
  return (
    <section className="flex flex-col gap-y-2 rounded-def border border-solid border-border p-5 sm:gap-y-4">
      <SubTitle title="Vamos trabalhar juntos!" />

      <Paragraph text="Se você se interessou pelo meu trabalho ou deseja dar feedback sobre este site, vamos bater um papo." />

      <Link
        href="/contact"
        className="group mt-1.5 flex h-[2.4rem] w-full max-w-[6.5rem] select-none items-center justify-center gap-1.5 rounded-def border border-solid border-border text-sm text-foreground hover:bg-border sm:mt-0 sm:h-11 sm:max-w-[7.563rem] sm:text-base"
      >
        Contate-me
      </Link>
    </section>
  )
}

export default Work
