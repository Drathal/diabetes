import { FC } from 'react'

import { dateStringFormat } from '@/lib/date'
import { DiabetesRow } from '@/decoder/diabetesRow'

type Props = {
  data: DiabetesRow
}

const DiabetesListItemHeader: FC<Props> = ({ data }: Props) => {
  return (
    <li>
      <div>{dateStringFormat(data.date, 'EEEE d.M.yy')}</div>
    </li>
  )
}

export default DiabetesListItemHeader
