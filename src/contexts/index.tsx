import { ContextProvider } from './context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <ContextProvider>{children}</ContextProvider>
}

export default Providers
