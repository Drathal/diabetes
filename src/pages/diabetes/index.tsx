import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'
import H2 from '../../components/elements/H2'
import P from '../../components/elements/P'
import DiabetesList from '../../components/DiabetesList'
import { fetchSheet } from '../../lib/fetchSheet'
import { DiabetesData } from '../../lib/fetchSheet'

type Props = DiabetesData

const WithServerSideProps: FC<Props> = (props: Props) => (
  <Layout title="Diabetes Data">
    <H2>Diabetes Data</H2>
    <P>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </P>
    <P>You are currently on: /diabetes</P>
    <DiabetesList {...props} />
    <P>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </P>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const props = await fetchSheet({ year: '2021', month: '04', day: '01' })
  return { props }
}

export default WithServerSideProps
