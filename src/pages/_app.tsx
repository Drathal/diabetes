import { FC } from 'react'
import type { AppProps } from 'next/app'

import useLoadingIndicator from '@/hooks/useLoadingIndicator'
import { ThemeProvider } from '@/theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [loading] = useLoadingIndicator()

  return (
    <ThemeProvider>
      {loading ? <h1>Loading...</h1> : <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default App
