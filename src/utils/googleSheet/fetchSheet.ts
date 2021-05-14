import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '@/config'
import { decodeDiabetesRows, DiabetesRow } from '@/decoder/diabetesRow'

import { getYearMonthString, getPreviousMonth } from '@/utils/date'
import { getOrCreateSheet } from './getOrCreateSheet'

export interface DiabetesData {
  rowCount: number
  rows: DiabetesRow[]
}

/**
 * Reads the sheet from the current and the past months.
 * It will create that sheets if they dont exist
 *
 * @param currentSheetName Google Sheet Tab Name
 * @param lastSheetName Google Sheet Tab Name
 * @returns Object with rows and cowcount
 */
export const fetchSheet = async (
  currentSheetName: string = getYearMonthString(),
  lastSheetName: string = getYearMonthString(getPreviousMonth())
): Promise<DiabetesData> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  await doc.loadInfo()

  const currentSheet = await getOrCreateSheet(doc, currentSheetName)
  const rows = await currentSheet.getRows()

  const lastSheet = await getOrCreateSheet(doc, lastSheetName)
  const lastRows = await lastSheet.getRows()

  const allRows = [...lastRows, ...rows]

  return {
    rowCount: currentSheet.rowCount + lastSheet.rowCount,
    rows: decodeDiabetesRows(allRows).reverse()
  }
}
