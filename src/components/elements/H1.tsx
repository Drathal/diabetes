import { FC } from 'react'
import Typography from '@material-ui/core/Typography'

const H1: FC = ({ children }) => (
  <Typography variant="h1" component="h1" gutterBottom>
    {children}
  </Typography>
)

export default H1
