import { FC } from 'react'
import Typography from '@material-ui/core/Typography'

const H2: FC = ({ children }) => (
  <Typography variant="h2" component="h2" gutterBottom>
    {children}
  </Typography>
)

export default H2
