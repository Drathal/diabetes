import { FC } from 'react'
import DiabetesListItem from './DiabetesListItem'
import { DiabetesData } from '../lib/fetchSheet'

type Props = DiabetesData

const List: FC<Props> = ({ rows }) => (
  <ul>
    {rows.map((item) => (
      <li key={item.index}>
        <DiabetesListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
