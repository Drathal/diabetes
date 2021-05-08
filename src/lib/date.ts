import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
import { sub, parse, parseISO, isSameDay as isSameDayFNS } from 'date-fns'

const timeZone = 'Europe/Berlin'

export const sheetDate2dateString = (sheetDate: string): string =>
  zonedTimeToUtc(
    parse(sheetDate, 'M/d/yyyy H:m:s', new Date()),
    timeZone
  ).toISOString()

export const dateString2Date = (dateString: string): Date =>
  utcToZonedTime(parseISO(dateString), timeZone)

export const dateStringFormat = (
  dateString: string,
  formatString: string
): string => format(dateString2Date(dateString), formatString)

export const isSameDay = (date1: string, date2: string): boolean =>
  !!date1 &&
  !!date2 &&
  isSameDayFNS(dateString2Date(date1), dateString2Date(date2))

export const isNotSameDay = (date1: string, date2: string): boolean =>
  !isSameDay(date1, date2)

export const getYearMonthString = (date: Date = new Date()): string => {
  const dateISO = zonedTimeToUtc(date, timeZone).toISOString()
  const yearMonth = dateStringFormat(dateISO, 'yyyy-MM')

  return yearMonth
}

export const getPreviousMonth = (date: Date = new Date()): Date => {
  return sub(date, {
    months: 1
  })
}
