import { FC } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import AppMenu from '@/elements/AppMenu'
import Menu from '@/elements/Menu'
import MenuItem from '@/elements/MenuItem'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Diabetes Tracker', href: '/diabetes', current: false }
]
type Navigation = typeof navigation[0]

const setCurrentNav = (currentNav: string) => (entry: Navigation) => {
  const current = entry.href === currentNav ? true : false
  return { ...entry, current }
}

type Props = {
  title?: string
}

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  const router = useRouter()
  const navWithCurrent = navigation.map(setCurrentNav(router.pathname))

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppMenu title={'Diabetes Tracker'} navigation={navWithCurrent}>
        <Menu
          srText="Open user menu"
          imageUrl={
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
        >
          <MenuItem url={'#'}>Your Profile</MenuItem>
          <MenuItem url={'#'}>Settings</MenuItem>
          <MenuItem url={'#'}>Sign out</MenuItem>
        </Menu>
      </AppMenu>

      <div className="pt-24">{children}&nbsp;</div>
    </>
  )
}

export default Layout
