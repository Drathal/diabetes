import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '../config'

interface SheetData {
  docTitle: string
  sheet0Title: string
  sheet0RowCount: number
}

interface Props {
  year: string
  month: string
  day: string
}

export const fetchSheet = async (props: Props): Promise<SheetData> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  const SheetName = `${props.year}-${props.month}`

  await doc.loadInfo()
  const sheet = doc.sheetsByTitle[SheetName]

  return {
    docTitle: doc.title,
    sheet0Title: sheet.title,
    sheet0RowCount: sheet.rowCount
  }
}
