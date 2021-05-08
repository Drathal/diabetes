import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  return (
    <li>
      <div>{dateStringFormat(data.date, 'H:mm')}</div>
      <div>{data.action}</div>
      <div>{data.value}</div>
      <div>{data.unit}</div>
    </li>
  )
}

export default DiabetesListItem
