import { FC } from 'react'
import Typography from '@material-ui/core/Typography'

const P: FC = ({ children }) => (
  <Typography variant="body1" component="p" gutterBottom>
    {children}
  </Typography>
)

export default P
