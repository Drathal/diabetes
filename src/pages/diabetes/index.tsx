import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import DiabetesList from '../../components/DiabetesList'
import { fetchSheet } from '../../lib/fetchSheet'
import { DiabetesData } from '../../lib/fetchSheet'

type Props = DiabetesData

const WithServerSideProps: FC<Props> = (props: Props) => (
  <Layout title="Diabetes Data">
    <h1>Diabetes Data</h1>
    <p>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </p>
    <p>You are currently on: /diabetes</p>
    <DiabetesList {...props} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const props = await fetchSheet({ year: '2021', month: '04', day: '01' })
  return { props }
}

export default WithServerSideProps
