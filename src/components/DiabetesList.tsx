import { FC, Fragment } from 'react'
import { isSameDay, parseISO } from 'date-fns'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import DiabetesListItemHeader from './DiabetesListItemHeader'
import DiabetesListItem from './DiabetesListItem'
import { DiabetesData } from '../lib/fetchSheet'

type Props = DiabetesData

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
)

const showHeader = (lastDate: string, date: string) =>
  !lastDate || !isSameDay(parseISO(lastDate), parseISO(date))

const DiabetesList: FC<Props> = ({ rows }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {rows.map((item, i) => (
        <Fragment key={item.index}>
          {showHeader(rows[i - 1]?.datum, item.datum) && (
            <DiabetesListItemHeader data={item} />
          )}
          <DiabetesListItem data={item} />
        </Fragment>
      ))}
    </List>
  )
}

export default DiabetesList
