import {
  sheetDate2dateString,
  dateString2Date,
  dateStringFormat,
  isSameDay,
  getYearMonthString,
  getPreviousMonth
} from './date'

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

  test('isSameDay()', () => {
    const inputTime1 = '2021-05-01T19:30:00.000Z'
    const inputTime2 = '2021-05-01T19:30:00.000Z'
    const expected = true

    const result = isSameDay(inputTime1, inputTime2)

    expect(result).toEqual(expected)
  })

  test('isNotSameDay()', () => {
    const inputTime1 = '2021-05-01T19:30:00.000Z'
    const inputTime2 = '2021-05-02T19:30:00.000Z'
    const expected = false

    const result = isSameDay(inputTime1, inputTime2)

    expect(result).toEqual(expected)
  })

  test('getYearMonth(date)', () => {
    const date = new Date('2021-04-01')
    const expected = '2021-04'

    const result = getYearMonthString(date)

    expect(result).toEqual(expected)
  })

  test('getPreviousMonth(date)', () => {
    const date = new Date('2021-04-01')
    const expected = '2021-03-01T01:00:00.000Z'

    const result = getPreviousMonth(date).toISOString()

    expect(result).toEqual(expected)
  })
})
