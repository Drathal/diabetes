import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItemHeader: FC<Props> = ({ data }: Props) => {
  return (
    <li className="sticky top-0 border-1 border rounded p-2 bg-white">
      {dateStringFormat(data.date, 'EEEE d.M.yy')}
    </li>
  )
}

export default DiabetesListItemHeader
