import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItemHeader: FC<Props> = ({ data }: Props) => {
  return (
    <li className="border-1 border rounded shadow p-2">
      {dateStringFormat(data.date, 'EEEE d.M.yy')}
    </li>
  )
}

export default DiabetesListItemHeader
