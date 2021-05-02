import { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

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

const DiabetesList: FC<Props> = ({ rows }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {rows.map((item) => (
        <DiabetesListItem data={item} key={item.index} />
      ))}
    </List>
  )
}

export default DiabetesList
