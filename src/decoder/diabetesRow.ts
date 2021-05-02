import { GoogleSpreadsheetRow } from 'google-spreadsheet'
import { parse, formatISO } from 'date-fns'

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
  date: formatISO(parse(row.date, 'M/d/yyyy H:m:s', new Date()), {
    format: 'extended',
    representation: 'complete'
  }),
  action: row.action,
  value: row.value,
  unit: actionUnitMap[row.action as Actions],
  index: row._rowNumber
})

type DecodeRows = (rows: GoogleSpreadsheetRow[]) => DiabetesRow[]
export const decodeDiabetesRows: DecodeRows = (rows) => rows.map(decode)
