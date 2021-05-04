import { FC } from 'react'
import { GetServerSideProps } from 'next'

import Layout from '@/components/Layout'
import DiabetesList from '@/components/DiabetesList'
import { fetchSheet } from '@/lib/fetchSheet'
import { DiabetesData } from '@/lib/fetchSheet'

type Props = DiabetesData

const WithServerSideProps: FC<Props> = (props) => (
  <Layout title="Diabetes Data">
    <DiabetesList {...props} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const props = await fetchSheet({ year, month })
  return { props }
}

export default WithServerSideProps
