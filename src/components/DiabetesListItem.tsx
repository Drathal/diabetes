import { FC } from 'react'
import { format, isSameDay, parse } from 'date-fns'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { DiabetesRow } from '../decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

let lastDate: null | Date = null

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  const date = parse(data.datum, 'M/d/yyyy H:m:s', new Date())
  const formattedDate = format(date, 'H:mm')
  const showHeader = !lastDate || !isSameDay(lastDate, date)
  lastDate = date

  return (
    <>
      {showHeader && <DiabetesListItemHeader data={data} />}
      <ListItem button>
        <ListItemText primary={formattedDate} />
        <ListItemText primary={data.action} />
        <ListItemText primary={data.unit} />
        <ListItemText primary={data.value} />
      </ListItem>
      <Divider />
    </>
  )
}

const DiabetesListItemHeader: FC<Props> = ({ data }: Props) => {
  const date = format(
    parse(data.datum, 'M/d/yyyy H:m:s', new Date()),
    'EEEE d.M.yy'
  )

  return (
    <>
      <ListItem>
        <ListItemText secondary={date} />
      </ListItem>
      <Divider />
    </>
  )
}

export default DiabetesListItem
