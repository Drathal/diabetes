import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '@/config'
import { decodeDiabetesRows, DiabetesRow } from '../decoder/diabetesRow'

export interface DiabetesData {
  rowCount: number
  rows: DiabetesRow[]
}

export const getCurrentSheetName = (): string => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  return `${year}-${('0' + month).slice(-2)}`
}

export const getLastSheetName = (): string => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  return `${year}-${('0' + month).slice(-2)}`
}

export const fetchSheet = async (
  curSheetName?: string,
  lastSheetName?: string
): Promise<DiabetesData> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  await doc.loadInfo()

  const currentSheet = doc.sheetsByTitle[curSheetName || getCurrentSheetName()]
  const rows = await currentSheet.getRows()
  const lastSheet = doc.sheetsByTitle[lastSheetName || getLastSheetName()]
  const lastRows = await lastSheet.getRows()
  const allRows = [...lastRows, ...rows]

  return {
    rowCount: currentSheet.rowCount + lastSheet.rowCount,
    rows: decodeDiabetesRows(allRows).reverse()
  }
}
