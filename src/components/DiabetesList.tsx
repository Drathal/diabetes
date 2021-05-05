import { FC, Fragment } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import { isNotSameDay } from '@/lib/date'
import DiabetesListItemHeader from '@/components/DiabetesListItemHeader'
import DiabetesListItem from '@/components/DiabetesListItem'
import { DiabetesData } from '@/lib/fetchSheet'

type Props = DiabetesData

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
)

const DiabetesList: FC<Props> = ({ rows }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {rows.map((item, i) => (
        <Fragment key={item.index}>
          {isNotSameDay(rows[i - 1]?.date, item.date) && (
            <DiabetesListItemHeader data={item} />
          )}
          <DiabetesListItem data={item} />
        </Fragment>
      ))}
    </List>
  )
}

export default DiabetesList
