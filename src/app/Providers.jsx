import React from 'react'
import { ThemeProvider } from '../context/themeContext/ThemeProvider'

const Providers = ({children}) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default Providers