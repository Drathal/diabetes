import React, { FC } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children
}: ThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
