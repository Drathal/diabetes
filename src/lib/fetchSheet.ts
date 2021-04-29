import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '../config'

export interface DiabetesData {
  docTitle: string
  sheet0Title: string
  sheet0RowCount: number
  rows: DiabetesRow[]
}

export interface DiabetesRow {
  datum: string
  action: string
  value: string
  unit: string
  index: number
}

interface Props {
  year: string
  month: string
  day: string
}

export const fetchSheet = async (props: Props): Promise<DiabetesData> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  const SheetName = `${props.year}-${props.month}`

  await doc.loadInfo()
  const sheet = doc.sheetsByTitle[SheetName]
  const rawRows = await sheet.getRows()

  // TODO: move to decoder file
  const rows: DiabetesRow[] = rawRows.map((r) => {
    return {
      datum: r.datum,
      action: r.action,
      value: r.value,
      unit: r.unit,
      index: r._rowNumber
    }
  })

  return {
    docTitle: doc.title,
    sheet0Title: sheet.title,
    sheet0RowCount: sheet.rowCount,
    rows
  }
}
