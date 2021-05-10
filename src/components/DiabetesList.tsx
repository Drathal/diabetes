import { FC, Fragment } from 'react'

import { isNotSameDay } from '@/lib/date'
import DiabetesListItemHeader from '@/components/DiabetesListItemHeader'
import DiabetesListItem from '@/components/DiabetesListItem'
import { DiabetesData } from '@/lib/fetchSheet'
import PlusIcon from '@/components/elements/icons/Plus'

type Props = DiabetesData

const classes = {
  wrapper: `flex flex-col flex-grow`,
  scrollContainer: `flex flex-col flex-grow`,
  list: `px-4 pb-8`,
  footer: `text-center`,
  button: `absolute px-3 py-4 -ml-4 text-white bg-indigo-500 rounded-full bottom-2 ripple-indigo`
}

const DiabetesList: FC<Props> = ({ rows }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollContainer}>
        <ul className={classes.list}>
          {rows.map((item, i) => (
            <Fragment key={`l${i}`}>
              {isNotSameDay(rows[i - 1]?.date, item.date) && (
                <DiabetesListItemHeader data={item} />
              )}
              {true && <DiabetesListItem data={item} />}
            </Fragment>
          ))}
        </ul>
      </div>
      <div className={classes.footer}>
        <button className={classes.button}>
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default DiabetesList
