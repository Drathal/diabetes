import { GoogleSpreadsheet } from 'google-spreadsheet'

import { addSheetEntry } from './addSheetEntry'

jest.mock('google-spreadsheet')

describe('addSheetEntry()', () => {
  test('it can add ...', async () => {
    const data = await addSheetEntry({ action: 'measure', value: '248' })

    expect(GoogleSpreadsheet).toBeDefined()
    expect(data).toEqual(5)
  })
})
