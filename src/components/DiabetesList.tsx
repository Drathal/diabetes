import { FC, Fragment } from 'react'

import { isNotSameDay } from '@/lib/date'
import DiabetesListItemHeader from '@/components/DiabetesListItemHeader'
import DiabetesListItem from '@/components/DiabetesListItem'
import { DiabetesData } from '@/lib/fetchSheet'

type Props = DiabetesData

const DiabetesList: FC<Props> = ({ rows }) => {
  return (
    <ul className="p-4">
      {rows.map((item, i) => (
        <Fragment key={`l${i}`}>
          {isNotSameDay(rows[i - 1]?.date, item.date) && (
            <DiabetesListItemHeader data={item} />
          )}
          {true && <DiabetesListItem data={item} />}
        </Fragment>
      ))}
    </ul>
  )
}

export default DiabetesList
