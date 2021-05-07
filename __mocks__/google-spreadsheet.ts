const mockRowData = {
  date: '5/5/2021 10:00:00',
  action: 'measure',
  value: '200',
  _rowNumber: 1
}

const getRows = (): Promise<[typeof mockRowData]> => {
  return Promise.resolve([mockRowData])
}

export class GoogleSpreadsheet {
  public sheetsByTitle = {
    ['2021-05']: { getRows, rowCount: 1 },
    ['2021-04']: { getRows, rowCount: 1 }
  }

  async useServiceAccountAuth(): Promise<void> {
    return Promise.resolve()
  }

  async loadInfo(): Promise<void> {
    return Promise.resolve()
  }
}
