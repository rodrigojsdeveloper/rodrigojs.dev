import { PropsWithChildren } from 'react'

const List = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">{children}</ul>
  )
}

export default List
