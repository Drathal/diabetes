export type SheetActions =
  | 'measure'
  | 'activity'
  | 'insulin-short'
  | 'insulin-long'
  | 'food'

export interface SheetHeader {
  date: string
  action: SheetActions
  value: string
}

export type SheetHeaderValues = keyof SheetHeader

export const sheetHeaderValues: SheetHeaderValues[] = [
  'date',
  'action',
  'value'
]
