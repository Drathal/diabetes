import { FC } from 'react'
import { useQuery } from 'react-query'

import Layout from '@/components/elements/Layout'
import DiabetesList from '@/components/DiabetesList'
import { DiabetesData } from '@/utils/googleSheet/fetchSheet'

const Diabetes: FC = () => {
  const { isLoading, error, data } = useQuery<DiabetesData, Error>(
    'sheetData',
    () => fetch('/api/month').then((res) => res.json())
  )

  const sheetData = data || { rowCount: 0, rows: [] }

  return (
    <Layout title="Diabetes Tracker">
      {isLoading && (
        <div className="m-auto mt-4 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      )}
      {error && <div>error while Fetching Data</div>}
      {!isLoading && <DiabetesList {...sheetData} />}
    </Layout>
  )
}

export default Diabetes
