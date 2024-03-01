import { PropsWithChildren } from 'react'

export const List = ({ children }: PropsWithChildren) => {
  return <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</ul>
}
