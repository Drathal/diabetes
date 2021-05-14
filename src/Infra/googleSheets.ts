import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
} from 'google-spreadsheet'

import config from '@/config'

let doc: GoogleSpreadsheet

export const connect = async (): Promise<GoogleSpreadsheet> => {
  doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  await doc.loadInfo()

  return doc
}

export const getSheetByTitle = (title: string): GoogleSpreadsheetWorksheet => {
  return doc.sheetsByTitle[title]
}

export const addSheet = async (
  title: string,
  headerValues: string[]
): Promise<GoogleSpreadsheetWorksheet> => {
  const sheet = await doc.addSheet({
    title,
    headerValues
  })

  return sheet
}

export const getOrCreateSheet = async (
  title: string,
  headerValues: string[]
): Promise<GoogleSpreadsheetWorksheet> => {
  const sheet = getSheetByTitle(title)

  if (sheet) {
    return sheet
  }

  const newSheet = await addSheet(title, headerValues)

  return newSheet
}
