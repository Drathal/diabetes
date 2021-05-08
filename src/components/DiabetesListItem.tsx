import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItem: FC<Props> = ({ data }: Props) => {
  return (
    <li className="border-b border-gray-200 flex w-full p-2">
      <div className="flex-1">{dateStringFormat(data.date, 'H:mm')}</div>
      <div className="flex-1">{data.action}</div>
      <div className="flex-1">{data.value}</div>
      <div className="flex-1">{data.unit}</div>
    </li>
  )
}

export default DiabetesListItem
