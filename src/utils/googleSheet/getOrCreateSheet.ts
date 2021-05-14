import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
} from 'google-spreadsheet'

import { sheetHeaderValues as headerValues } from '@/encoder/googleSheet'

export const getOrCreateSheet = async (
  doc: GoogleSpreadsheet,
  title: string
): Promise<GoogleSpreadsheetWorksheet> => {
  let sheet = doc.sheetsByTitle[title]

  if (!sheet) {
    sheet = await doc.addSheet({
      title,
      headerValues
    })
  }

  return sheet
}
