import { FC } from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

import { classNames } from '@/lib/classNames'

interface Props {
  url: string
}

const MenuItem: FC<Props> = ({ url, children }) => (
  <Menu.Item>
    {({ active }) => (
      <Link href={url}>
        <a
          className={classNames(
            active ? 'bg-gray-100' : '',
            'block px-4 py-2 text-sm text-gray-700'
          )}
        >
          {children}
        </a>
      </Link>
    )}
  </Menu.Item>
)

export default MenuItem
