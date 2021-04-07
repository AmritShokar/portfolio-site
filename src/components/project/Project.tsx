import styles from './Project.module.css'
import { Box, Grid, Paper, Avatar, Typography, makeStyles, createStyles, Theme, Divider } from '@material-ui/core'

import bridgeApp from '../../res/bridgeApp1.png'
import yodelmeApp from '../../res/yodelmeApp1.jpg'
import yodelmeApp2 from '../../res/yodelmeApp2.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   paper: {
       textAlign: 'center'
   },
   divider: {
       margin: '4em'
   }
  }),
);

const Project = () => {
    const classes = useStyles();

    return (
        <Box className={styles["section"]}>
            <Grid container direction="column" spacing={2}>

                <Grid item xs={12} container>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                        <img alt="bridge services app" src={bridgeApp} className={styles['projectImage']}/>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Paper elevation={2}>This is a test Number 2</Paper>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>

                <Divider className={classes.divider}/>

                <Grid item xs={12} container>
                    <Grid item xs={6}>
                        <img alt="yodelme app" src={yodelmeApp} className={styles['projectImage']} />
                        <img alt="yodelme app" src={yodelmeApp2} className={styles['projectImage']} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Paper elevation={2}>This is a test Number 2</Paper>
                    </Grid>
                </Grid>

                <Divider className={classes.divider}/>

                <Grid item xs={12} container>
                    <Grid item xs={6}>
                        <img alt="yodelme app" src={yodelmeApp} className={styles['projectImage']} />
                        <img alt="yodelme app" src={yodelmeApp2} className={styles['projectImage']} />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Paper elevation={2}>This is a test Number 2</Paper>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Project
