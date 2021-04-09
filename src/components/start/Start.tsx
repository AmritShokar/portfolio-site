import styles from './Start.module.css'
import { Box, Grid, Avatar, makeStyles, createStyles, Theme } from '@material-ui/core'

import icon1 from '../../res/happy1.svg'
import icon2 from '../../res/happy2.svg'
import icon3 from '../../res/happy3.svg'
import icon4 from '../../res/happy4.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      backgroundColor: '#ADD8E6'
    },
    grid: {
        padding: '3em'
    },
    icons: {
      height: 'auto',
      width: 'auto'
    }
  }),
  {index: 1}
);

const Start = () => {
    const classes = useStyles()

    return (
        <Box className={classes.section}>
            <Grid container className={classes.grid}>
              <Grid item md={2} />

              <Grid item xs={3} md={1}>
                <Avatar alt="icon1" src={icon1} className={classes.icons} />
              </Grid>

              <Grid item md={1} />

              <Grid item xs={3} md={1}>
                <Avatar alt="icon2" src={icon2} className={classes.icons} />
              </Grid>

              <Grid item md={2} />
              
              <Grid item xs={3} md={1}>
                <Avatar alt="icon3" src={icon3} className={classes.icons} />
              </Grid>

              <Grid item md={1} />

              <Grid item xs={3} md={1}>
                <Avatar alt="icon4" src={icon4} className={classes.icons} />
              </Grid>

              <Grid item md={2} />
            </Grid>

        </Box>
    )
}

export default Start
