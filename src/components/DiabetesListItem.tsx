import { FC } from 'react'

import { DiabetesRow } from '../lib/fetchSheet'

// TODO: use Pick
type Props = {
  data: DiabetesRow
}

const ListItem: FC<Props> = ({ data }: Props) => (
  <>
    <span>{data.datum}</span>
    <span>{data.action}</span>
    <span>{data.unit}</span>
    <span>{data.value}</span>
  </>
)

export default ListItem
