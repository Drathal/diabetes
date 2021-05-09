import { FC } from 'react'
import { useQuery } from 'react-query'

import Layout from '@/components/elements/Layout'
import DiabetesList from '@/components/DiabetesList'
import { DiabetesData } from '@/lib/fetchSheet'

const Diabetes: FC = () => {
  const { isLoading, error, data } = useQuery<DiabetesData, Error>(
    'sheetData',
    () => fetch('/api/month').then((res) => res.json())
  )

  const sheetData = data || { rowCount: 0, rows: [] }

  return (
    <Layout title="Diabetes Tracker">
      {isLoading && <div>fetching Diabetes Data from Google Sheets</div>}
      {error && <div>error while Fetching Data</div>}
      <DiabetesList {...sheetData} />
    </Layout>
  )
}

export default Diabetes
