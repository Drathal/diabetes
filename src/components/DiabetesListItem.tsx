import { FC } from 'react'
import { format, parseISO } from 'date-fns'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { DiabetesRow } from '../decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const useStyles = makeStyles(() =>
  createStyles({
    time: {
      maxWidth: '5rem'
    },
    action: {
      maxWidth: '8rem'
    }
  })
)

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  const classes = useStyles()
  return (
    <>
      <ListItem button>
        <ListItemText
          primary={format(parseISO(data.date), 'H:mm')}
          className={classes.time}
        />
        <ListItemText primary={data.action} className={classes.action} />
        <ListItemText
          primary={data.value}
          primaryTypographyProps={{
            style: {
              display: 'inline'
            }
          }}
          secondary={data.unit}
          secondaryTypographyProps={{
            style: {
              display: 'inline',
              marginLeft: '0.5rem'
            }
          }}
        />
      </ListItem>
      <Divider />
    </>
  )
}

export default DiabetesListItem
