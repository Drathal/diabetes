import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
} from 'google-spreadsheet'

import config from '@/config'
import { decodeDiabetesRows, DiabetesRow } from '@/decoder/diabetesRow'
import { sheetHeaderValues } from '@/encoder/googleSheet'
import { getYearMonthString, getPreviousMonth } from '@/lib/date'

export interface DiabetesData {
  rowCount: number
  rows: DiabetesRow[]
}

const getOrCreateSheet = async (
  doc: GoogleSpreadsheet,
  sheetName: string
): Promise<GoogleSpreadsheetWorksheet> => {
  let sheet = doc.sheetsByTitle[sheetName]

  if (!sheet) {
    sheet = await doc.addSheet({
      title: sheetName,
      headerValues: sheetHeaderValues
    })
  }

  return sheet
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
