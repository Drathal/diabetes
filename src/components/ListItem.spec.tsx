import { render } from '@testing-library/react'

import ListItem from './ListItem'

describe('<ListItem />', () => {
  test('it can render', () => {
    const testValues = { id: 1, name: 'description' }
    const { getByText } = render(<ListItem data={testValues} />)
    expect(getByText(testValues.name)).toBeInTheDocument()
    expect(getByText(testValues.id)).toBeInTheDocument()
  })
})
