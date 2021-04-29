import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import { fetchSheet } from '../../lib/fetchSheet'

type Props = {
  items: any
}

const WithServerSideProps: FC<Props> = ({ items }: Props) => (
  <Layout title="Diabetes Data">
    <h1>Diabetes Data</h1>
    <p>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </p>
    <p>You are currently on: /diabetes</p>
    <pre>
      <code>{JSON.stringify(items)}</code>
    </pre>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  console.log('params res', params, res)

  const data = await fetchSheet({ year: '2021', month: '04', day: '01' })

  const items = data
  return { props: { items } }
}

export default WithServerSideProps
