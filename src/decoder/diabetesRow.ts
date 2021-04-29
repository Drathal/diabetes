import { GoogleSpreadsheetRow } from 'google-spreadsheet'

export interface DiabetesRow {
  datum: string
  action: string
  value: string
  unit: string
  index: number
}

type Decode = (row: GoogleSpreadsheetRow) => DiabetesRow
const decode: Decode = (row) => ({
  datum: row.datum,
  action: row.action,
  value: row.value,
  unit: row.unit,
  index: row._rowNumber
})

type DecodeRows = (rows: GoogleSpreadsheetRow[]) => DiabetesRow[]
export const decodeDiabetesRows: DecodeRows = (rows) => rows.map(decode)
