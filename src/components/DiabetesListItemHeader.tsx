import { FC } from 'react'
import { format, parseISO } from 'date-fns'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItemHeader: FC<Props> = ({ data }: Props) => {
  return (
    <>
      <ListItem>
        <ListItemText secondary={format(parseISO(data.date), 'EEEE d.M.yy')} />
      </ListItem>
      <Divider />
    </>
  )
}

export default DiabetesListItemHeader
