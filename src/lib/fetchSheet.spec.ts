import { fetchSheet } from './fetchSheet'

// we need to mock that later
describe('fetchSheet()', () => {
  test('it can fetch the configured Sheet Data', async () => {
    const data = await fetchSheet({ year: '2021', month: '04', day: '01' })
    expect(data).toEqual({
      docTitle: 'Diabetes',
      sheet0RowCount: 1000,
      sheet0Title: '2021-04'
    })
  })
})
