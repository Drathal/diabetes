import { FC, Fragment } from 'react'

import { isNotSameDay } from '@/lib/date'
import DiabetesListItemHeader from '@/components/DiabetesListItemHeader'
import DiabetesListItem from '@/components/DiabetesListItem'
import { DiabetesData } from '@/lib/fetchSheet'

type Props = DiabetesData

const DiabetesList: FC<Props> = ({ rows }) => {
  return (
    <ul>
      {rows.map((item, i) => (
        <Fragment key={item.index}>
          {isNotSameDay(rows[i - 1]?.date, item.date) && (
            <DiabetesListItemHeader data={item} />
          )}
          <DiabetesListItem data={item} />
        </Fragment>
      ))}
    </ul>
  )
}

export default DiabetesList
