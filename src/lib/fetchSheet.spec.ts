import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fetchSheet } from './fetchSheet'

jest.mock('google-spreadsheet')

describe('fetchSheet()', () => {
  test('it can fetch existing Sheet Data', async () => {
    const data = await fetchSheet('2021-05', '2021-05')

    expect(GoogleSpreadsheet).toBeDefined()
    expect(data).toEqual({
      rowCount: 2,
      rows: [
        {
          date: '2021-05-05T08:00:00.000Z',
          action: 'measure',
          value: '200',
          index: 1,
          unit: 'mg/dl'
        },
        {
          date: '2021-05-05T08:00:00.000Z',
          action: 'measure',
          value: '200',
          index: 1,
          unit: 'mg/dl'
        }
      ]
    })
  })

  test('it can create new Sheets', async () => {
    const data = await fetchSheet('2021-02', '2021-03')

    expect(GoogleSpreadsheet).toBeDefined()
    expect(data).toEqual({
      rowCount: 2,
      rows: [
        {
          date: '2021-05-05T08:00:00.000Z',
          action: 'measure',
          value: '200',
          index: 1,
          unit: 'mg/dl'
        },
        {
          date: '2021-05-05T08:00:00.000Z',
          action: 'measure',
          value: '200',
          index: 1,
          unit: 'mg/dl'
        }
      ]
    })
  })
})
