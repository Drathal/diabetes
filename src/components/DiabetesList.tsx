import { FC } from 'react'
import List from '@material-ui/core/List'

import DiabetesListItem from './DiabetesListItem'
import { DiabetesData } from '../lib/fetchSheet'

type Props = DiabetesData

const DiabetesList: FC<Props> = ({ rows }) => (
  <List>
    {rows.map((item) => (
      <DiabetesListItem data={item} key={item.index} />
    ))}
  </List>
)

export default DiabetesList
