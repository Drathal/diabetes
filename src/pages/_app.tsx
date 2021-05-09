import { FC, useRef } from 'react'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

// import useLoadingIndicator from '@/hooks/useLoadingIndicator'
import '@/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClientRef = useRef<undefined | QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  // const [loading] = useLoadingIndicator()

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
