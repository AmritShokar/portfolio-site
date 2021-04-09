import styles from './Project.module.css'
import { Box, Grid, Paper, Avatar, Typography, makeStyles, createStyles, Theme, Divider } from '@material-ui/core'

import bridgeApp from '../../res/bridgeApp1.png'
import yodelmeApp from '../../res/yodelmeApp1.jpg'
import yodelmeApp2 from '../../res/yodelmeApp2.jpg'
import komixstreamApp from '../../res/komixstreamApp.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
        backgroundColor: '#ADD8E6',
        padding: '5em'
    },
    title: {
        fontFamily: 'Ubuntu',
        fontSize: '4em',
        paddingBottom: '1em'
    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#90EE90'
    },
    divider: {
        margin: '4em'
    },
    projectTitle: {
        fontFamily: 'Poppins',
        paddingTop: '1em'
    },
    projectImage: {
        height: 'auto',
        width: 'auto',
        paddingBottom: '1em'
    }
  }),
  {index: 1}
);

const Project = () => {
    const classes = useStyles();

    return (
        <Box className={classes.section}>
            <Typography align="center" gutterBottom variant="h2" className={classes.title}>Projects</Typography>
            <Grid container direction="column">

                <Grid item xs={12} container>
                    <Grid item md={1}/>
                    <Grid item xs={12} md={4}>
                        <Avatar alt="bridge services app" variant="square" src={bridgeApp} className={classes.projectImage}/>
                    </Grid>

                    <Grid item md={1}/>

                    <Grid item xs={12} md={5}>
                        <Paper elevation={2} className={classes.paper}>
                            <Typography align="center" gutterBottom variant="h5" className={classes.projectTitle}>The Bridge Services</Typography>

                            <ul className={styles['projectList']}>
                                <li>
                                    An iOS mobile app developed using the Google Calendar Api
                                </li>
                                <li>
                                    Also used a firebase account to send push notification to end users
                                </li>
                                <li>
                                    Used to keep track of hosted events intended for children
                                </li>
                                <li>
                                    The admin Google account was used by staff to update events
                                </li>
                            </ul>

                        </Paper>
                    </Grid>

                    <Grid item md={1}/>
                </Grid>

                <Divider className={classes.divider}/>

                <Grid item xs={12} container>

                    <Grid item xs={12} md={3}>
                        <Avatar alt="yodelme app" variant="square" src={yodelmeApp} className={classes.projectImage} />
                    </Grid>

                    <Grid item md={1}/>

                    <Grid item xs={12} md={3}>
                        <Avatar alt="yodelme app" variant="square" src={yodelmeApp2} className={classes.projectImage} />
                    </Grid>

                    <Grid item md={1}/>

                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} className={classes.paper}>
                            <Typography align="center" gutterBottom variant="h5" className={classes.projectTitle}>yodelME</Typography>

                            <ul className={styles['projectList']}>
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
                                    The app was used by offices to monitor worker statuses
                                </li>
                                <li>
                                    This system was specifically aimed towards workers that were placed in potentially hazardous environments
                                </li>
                            </ul>

                        </Paper>
                    </Grid>

                </Grid>

                <Divider className={classes.divider}/>

                <Grid item xs={12} container>
                    <Grid item md={1}/>

                    <Grid item xs={12} md={3}>
                        <Avatar alt="komixstream app" variant="square" src={komixstreamApp} className={classes.projectImage} />
                    </Grid>

                    <Grid item md={2} />

                    <Grid item xs={12} md={5}>
                        <Paper elevation={2} className={classes.paper}>
                            <Typography align="center" gutterBottom variant="h5" className={classes.projectTitle}>Komixstream</Typography>

                            <ul className={styles['projectList']}>
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
                                    This app delivered a custom digital comic reading experience to the end-user
                                </li>
                                <li>
                                    Exclusive content was procured for readers using the platform
                                </li>
                            </ul>

                        </Paper>
                    </Grid>
                    <Grid item md={1}/>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Project
