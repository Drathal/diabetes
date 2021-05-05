import { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const useStyles = makeStyles(() =>
  createStyles({
    time: {
      maxWidth: '5rem',
      textAlign: 'right',
      marginRight: '1rem'
    },
    action: {
      maxWidth: '8rem'
    },
    value: {
      maxWidth: '6rem',
      textAlign: 'right',
      marginRight: '1rem'
    }
  })
)

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  const classes = useStyles()
  return (
    <>
      <ListItem button>
        <ListItemText
          primary={dateStringFormat(data.date, 'H:mm')}
          className={classes.time}
        />
        <ListItemText primary={data.action} className={classes.action} />
        <ListItemText primary={data.value} className={classes.value} />
        <ListItemText secondary={data.unit} />
      </ListItem>
      <Divider />
    </>
  )
}

export default DiabetesListItem
