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
  const props = await fetchSheet()
  return { props }
}

export default WithServerSideProps
