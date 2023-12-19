import { PropsWithChildren } from 'react'

const GroupedItems = ({ children }: PropsWithChildren) => {
  return <ul className="flex flex-wrap gap-2 sm:gap-3">{children}</ul>
}

export default GroupedItems
