import styles from './Project.module.css'
import { Box, Grid, Paper, Avatar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import bridgeApp from '../../res/bridgeApp1.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   paper: {
       textAlign: 'center'
   }
  }),
);

const Project = () => {
    const classes = useStyles();

    return (
        <Box className={styles["section"]}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper>
                        <Avatar alt="test" src={bridgeApp}></Avatar>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper>This is a test Number 2</Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Project
