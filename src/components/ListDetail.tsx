import { FC } from 'react'

import { User } from '@/interfaces'

type Props = {
  item: User
}

const ListDetail: FC<Props> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
