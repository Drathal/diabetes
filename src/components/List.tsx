import { FC } from 'react'

import { User } from '@/interfaces'
import ListItem from '@/components/ListItem'

type Props = {
  items: User[]
}

const List: FC<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
