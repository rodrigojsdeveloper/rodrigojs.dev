import stacks from '@/utils/stacks'
import SubTitle from './SubTitle'
import array from '@/utils/array'
import Stack from './Stack'

const Stacks = () => {
  return (
    <section className="flex w-full flex-col gap-2 rounded-def sm:gap-6">
      <SubTitle title="Habilidades" />
      <div className="relative flex gap-4 overflow-hidden lg:m-auto lg:w-[40.625rem]">
        {array(0, 2).map((index) => (
          <ul
            key={index}
            className="animate-slide flex justify-around gap-3"
            data-testid={`slider-child-${index + 1}`}
          >
            {stacks.map((stack, index) => (
              <Stack src={stack.src} bg={stack.bg} key={index} />
            ))}
          </ul>
        ))}
        <div className="bg-fade-gradient pointer-events-none absolute inset-0" />
      </div>
    </section>
  )
}

export default Stacks
