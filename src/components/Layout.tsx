import { ReactNode, FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div>
          <div>
            <h1>Diabetes Tracker</h1>
          </div>

          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/diabetes">
              <a>Diabetes List</a>
            </Link>
          </div>
        </div>
      </header>

      <div>{children}&nbsp;</div>

      <footer>
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
