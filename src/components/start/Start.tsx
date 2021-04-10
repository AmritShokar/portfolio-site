import styles from './Start.module.css'
import { Box, Grid, Avatar, makeStyles, createStyles, Theme } from '@material-ui/core'

import icon1 from '../../res/happy1.svg'
import icon2 from '../../res/happy2.svg'
import icon3 from '../../res/happy3.svg'
import icon4 from '../../res/happy4.svg'

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
            {/* <Grid container className={classes.grid}> */}
              
              {/* <img src={transition} className={classes.transition} /> */}

              
            {/* </Grid> */}

        </Box>
    )
}

export default Start
