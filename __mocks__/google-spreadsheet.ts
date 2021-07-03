const mockRowData = {
  date: '5/5/2021 10:00:00',
  action: 'measure',
  value: '200',
  _rowNumber: 1,
  delete: async () => {
    return Promise.resolve()
  },
  save: async () => {
    return Promise.resolve()
  }
}

const getRows = (): Promise<[typeof mockRowData]> => {
  return Promise.resolve([mockRowData])
}

const addRow = (addData: unknown): Promise<typeof addData> => {
  return Promise.resolve(addData)
}

type Sheet = {
  getRows: typeof getRows
  addRow: typeof addRow
  rowCount: number
}

type SheetsByTitle = {
  [P: string]: Sheet
}
export class GoogleSpreadsheet {
  public addRowValues: Record<string, unknown> = {}

  constructor(public sheet_id: string) {}

  public sheetsByTitle: SheetsByTitle = {
    ['2021-05']: { getRows, addRow, rowCount: 1 }
  }

  async useServiceAccountAuth(): Promise<void> {
    return Promise.resolve()
  }

  async loadInfo(): Promise<void> {
    return Promise.resolve()
  }

  async addSheet({ title }: { title: string }): Promise<Sheet> {
    this.sheetsByTitle[title] = this.sheetsByTitle['2021-05']
    return Promise.resolve(this.sheetsByTitle[title])
  }
}
