import { PropsWithChildren } from 'react'

const List = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {children}
    </ul>
  )
}

export default List
