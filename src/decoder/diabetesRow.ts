import { GoogleSpreadsheetRow } from 'google-spreadsheet'

import { sheetDate2dateString } from '@/lib/date'

type Actions =
  | 'measure'
  | 'activity'
  | 'insulin-short'
  | 'insulin-long'
  | 'food'

type Units = 'mg/dl' | 'h' | 'units' | 'BU'

type ActionUnitMap = {
  [key in Actions]: Units
}

const actionUnitMap: ActionUnitMap = {
  measure: 'mg/dl',
  activity: 'h',
  'insulin-short': 'units',
  'insulin-long': 'units',
  food: 'BU'
}

type Decode = (row: GoogleSpreadsheetRow) => DiabetesRow

export interface DiabetesRow {
  date: string
  action: Actions
  value: string
  unit: Units
  index: number
}

const decode: Decode = (row) => ({
  date: sheetDate2dateString(row.date),
  action: row.action,
  value: row.value,
  unit: actionUnitMap[row.action as Actions],
  index: row._rowNumber
})

type DecodeRows = (rows: GoogleSpreadsheetRow[]) => DiabetesRow[]
export const decodeDiabetesRows: DecodeRows = (rows) => rows.map(decode)
