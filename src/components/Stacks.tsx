import GroupedItems from './GroupedItems'
import stacks from '@/utils/stacks'
import SubTitle from './SubTitle'
import Stack from './Stack'

const Stacks = () => {
  return (
    <section className="flex w-full flex-col gap-2 rounded-def border border-solid border-gray-200 p-5 sm:gap-4">
      <SubTitle title="Habilidades" />
      <GroupedItems>
        {stacks.map((stack, index) => (
          <Stack src={stack.src} bg={stack.bg} key={index} />
        ))}
      </GroupedItems>
    </section>
  )
}

export default Stacks
