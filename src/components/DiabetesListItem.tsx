import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const classes = {
  wrapper: `flex items-center w-full p-2 border-b border-gray-200`,
  time: `flex-initial w-16 mr-2 prose-xl text-right`,
  action: `flex-1  prose mr-2 text-gray-600`,
  value: `flex-initial text-right prose-xl w-32 mr-2`,
  unit: `flex-1 prose-sm color text-gray-500`
}

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.time}>{dateStringFormat(data.date, 'H:mm')}</div>
      <div className={classes.action}>{data.action}</div>
      <div className={classes.value}>{data.value}</div>
      <div className={classes.unit}>{data.unit}</div>
    </li>
  )
}

export default DiabetesListItem
