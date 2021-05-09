import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'
import TimeIcon from '@/components/elements/icons/Time'
import DropIcon from '@/components/elements/icons/Drop'
import BreadIcon from '@/components/elements/icons/Bread'
import InjectionIcon from '@/components/elements/icons/Injection'

type Props = {
  data: DiabetesRow
}

const classes = {
  wrapper: `flex border-b ripple place-items-center h-12`,
  time: `flex justify-end place-items-center w-24 mr-2 prose-xl text-right `,
  action: `flex-1  prose mr-2 text-gray-600  `,
  value: `flex-initial text-right prose-xl w-32 mr-2`,
  unit: `flex-1 prose-sm color text-gray-500`
}

const actions = {
  'insulin-short': 'Apidra',
  'insulin-long': 'Tujeo',
  measure: 'Blutzucker',
  food: 'Broteinheiten',
  activity: 'Aktivität'
}

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.time}>
        <span>{dateStringFormat(data.date, 'H:mm')}</span>
        <TimeIcon />
      </div>
      <div className={classes.action}>{actions[data.action]}</div>
      <div className={classes.value}>{data.value}</div>
      <div className={classes.unit}>
        {data.unit === 'mg/dl' && <DropIcon />}
        {data.unit === 'BU' && <BreadIcon />}
        {data.unit === 'units' && <InjectionIcon />}
        {data.unit === 'h' && <TimeIcon />}
      </div>
    </li>
  )
}

export default DiabetesListItem
