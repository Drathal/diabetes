import { FC } from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem: FC<Props> = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      <span>{data.id}</span>: <span>{data.name}</span>
    </a>
  </Link>
)

export default ListItem
