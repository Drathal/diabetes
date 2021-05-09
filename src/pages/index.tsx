import { FC } from 'react'
import Link from 'next/link'

import Layout from '@/components/elements/Layout'

const IndexPage: FC = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
