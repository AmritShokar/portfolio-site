import styles from './Project.module.css'
import { Box, Grid, Paper, Avatar, Typography, makeStyles, createStyles, Theme, Divider } from '@material-ui/core'

import bridgeApp from '../../res/bridgeApp1.png'
import yodelmeApp from '../../res/yodelmeApp1.jpg'
import yodelmeApp2 from '../../res/yodelmeApp2.jpg'
import komixstreamApp from '../../res/komixstreamApp.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        fontFamily: 'Ubuntu',
        fontSize: '4em'
    },
    paper: {
        textAlign: 'center'
    },
    divider: {
        margin: '4em'
    },
    projectTitle: {
        // paddingBottom: '1em'
    }
  }),
);

const Project = () => {
    const classes = useStyles();

    return (
        <Box className={styles["section"]}>
            <Typography align="center" gutterBottom variant="h2" className={classes.title}>Projects</Typography>
            <Grid container direction="column" spacing={2}>

                <Grid item xs={12} container>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                        <img alt="bridge services app" src={bridgeApp} className={styles['projectImage']}/>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <Paper elevation={2}>
                            <Typography align="center" gutterBottom variant="h5">The Bridge Services</Typography>

                            <ul>
                                <li>An iOS mobile app developed using the Google Calendar Api</li>
                                <li>Also used a firebase account to send push notification to end users</li>
                                <li>Used to keep track of hosted events intended for children</li>
                                <li>The admin Google account was used by staff to update events</li>
                            </ul>

                        </Paper>
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
                        <Paper elevation={2}>
                            <Typography align="center" gutterBottom variant="h5">yodelME</Typography>

                            <ul>
                                <li>
                                    A hybrid app for both iOS and Android platforms
                                </li>
                                <li>
                                    The mobile apps where built using Cardova and the backend was a Spring Framework server
                                </li>
                                <li>
                                    The backend was hosted on an AWS Elastic Beanstalk instance
                                </li>
                                <li>
                                    The app was used by offices to monitor worker statuses. This system was specifically
                                    aimed towards workers that were placed in potentially hazardous environments
                                </li>
                            </ul>

                        </Paper>
                    </Grid>
                </Grid>

                <Divider className={classes.divider}/>

                <Grid item xs={12} container>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        <img alt="komixstream app" src={komixstreamApp} className={styles['projectImage']} />
                    </Grid>
                    <Grid item xs={5}>
                        <Paper elevation={2}>
                            <Typography align="center" gutterBottom variant="h5">Komixstream</Typography>

                            <ul>
                                <li>
                                    A native iOS app built using various interal iOS apis.
                                </li>
                                <li>
                                    A backend pipeline was built inhouse to deliver content to the iOS app
                                </li>
                                <li>
                                    The backend pipeline consisted of an Angular admin dashboard and a
                                    Python Flask backend
                                </li>
                                <li>
                                    This app delivered a custom digital comic reading experience to the end-user.
                                    Exclusive content was procured for readers using the platform
                                </li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Project
