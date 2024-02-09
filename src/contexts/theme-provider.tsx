'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...rest } = props

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...rest}
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider
