import { GoogleSpreadsheet } from 'google-spreadsheet'

import config from '@/config'
import { SheetActions } from '@/encoder/googleSheet'
import { getOrCreateSheet } from './getOrCreateSheet'
import { date2SheetDate, getYearMonthString } from '@/utils/date'

export interface AddSheetEntry {
  action: SheetActions
  value: string
}

export const addSheetEntry = async ({
  action,
  value
}: AddSheetEntry): Promise<void> => {
  const doc = new GoogleSpreadsheet(config.sheet_id)

  await doc.useServiceAccountAuth({
    client_email: config.client_email,
    private_key: config.private_key
  })

  await doc.loadInfo()

  const currentDateString = date2SheetDate()
  const currentSheetName = getYearMonthString()
  const currentSheet = await getOrCreateSheet(doc, currentSheetName)

  const row = await currentSheet.addRow({
    date: currentDateString,
    action,
    value
  })

  console.log(row)
}
