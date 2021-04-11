// import styles from './Start.module.css'
import { Box, makeStyles, createStyles, Theme } from '@material-ui/core'

import transition from '../../res/kelowna-transition-1.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      backgroundImage: `url(${transition})`,
      minHeight: '30em',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    grid: {
        padding: '0em'
    },
    icons: {
      height: 'auto',
      width: 'auto'
    },
    transition: {
      height: '60vh',
      width: '100%'
    }
  }),
  {index: 1}
);

const Start = () => {
    const classes = useStyles()

    return (
        <Box className={classes.section}>
        </Box>
    )
}

export default Start
