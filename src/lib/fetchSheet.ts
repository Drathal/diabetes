import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '@/config'
import { decodeDiabetesRows, DiabetesRow } from '../decoder/diabetesRow'

export interface DiabetesData {
  rowCount: number
  rows: DiabetesRow[]
}

interface Props {
  year: number
  month: number
  day?: number
}

export const fetchSheet = async (props: Props): Promise<DiabetesData> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  await doc.loadInfo()
  const currentSheet =
    doc.sheetsByTitle[`${props.year}-${('0' + props.month).slice(-2)}`]
  const rows = await currentSheet.getRows()

  // TODO: solve this more elegant this will break
  const lastSheet =
    doc.sheetsByTitle[`${props.year}-${('0' + (props.month - 1)).slice(-2)}`]
  const lastRows = await lastSheet.getRows()

  const allRows = [...lastRows, ...rows]

  return {
    rowCount: currentSheet.rowCount + lastSheet.rowCount,
    rows: decodeDiabetesRows(allRows).reverse()
  }
}
