const mockRowData = {
  date: '5/5/2021 10:00:00',
  action: 'measure',
  value: '200',
  _rowNumber: 1
}

const getRows = (): Promise<[typeof mockRowData]> => {
  return Promise.resolve([mockRowData])
}

type Sheet = { getRows: typeof getRows; rowCount: number }
type SheetsByTitle = {
  [P: string]: Sheet
}
export class GoogleSpreadsheet {
  public sheetsByTitle: SheetsByTitle = {
    ['2021-05']: { getRows, rowCount: 1 }
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