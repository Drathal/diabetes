import { ReactNode, FC, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type Props = {
  children?: ReactNode
  title?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8)
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[200]
  }
}))

const Layout: FC<Props> = ({
  children,
  title = 'This is the default title'
}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Diabetes Tracker</Typography>
          </Toolbar>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/users">
                <a>Users List</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/diabetes">
                <a>Diabetes List</a>
              </Link>
            </MenuItem>
          </Menu>
        </AppBar>
      </header>
      <Container component="main" className={classes.main}>
        {children}&nbsp;
      </Container>
      <footer className={classes.footer}>
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
