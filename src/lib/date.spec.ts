import { sheetDate2dateString, dateString2Date, dateStringFormat } from './date'

describe('lib/date', () => {
  test('sheetDate2dateString()', () => {
    const inputTime = '5/1/2021 21:30:00'
    const expected = '2021-05-01T19:30:00.000Z'

    const result = sheetDate2dateString(inputTime)

    expect(result).toEqual(expected)
  })

  test('dateString2Date()', () => {
    const inputTime = '2021-05-01T19:30:00.000Z'
    const expected = '2021-05-01T19:30:00.000Z'

    const result = dateString2Date(inputTime).toISOString()

    expect(result).toEqual(expected)
  })

  test('dateStringFormat()', () => {
    const inputTime = '2021-05-01T19:30:00.000Z'
    const expected = '21:30'

    const result = dateStringFormat(inputTime, 'H:mm')

    expect(result).toEqual(expected)
  })
})
