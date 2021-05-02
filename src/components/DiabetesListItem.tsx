import { FC } from 'react'
import { format, parseISO } from 'date-fns'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { DiabetesRow } from '../decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  return (
    <>
      <ListItem button>
        <ListItemText primary={format(parseISO(data.datum), 'H:mm')} />
        <ListItemText primary={data.action} />
        <ListItemText primary={data.unit} />
        <ListItemText primary={data.value} />
      </ListItem>
      <Divider />
    </>
  )
}

export default DiabetesListItem
