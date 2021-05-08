import { FC } from 'react'
import type { AppProps } from 'next/app'

import useLoadingIndicator from '@/hooks/useLoadingIndicator'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [loading] = useLoadingIndicator()

  return <>{loading ? <h1>Loading...</h1> : <Component {...pageProps} />}</>
}

export default App
