import React, { forwardRef } from 'react'
import { Grid, Paper, Avatar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import profile from '../../res/profile.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
        backgroundColor: '#90EE90',
        paddingTop: '3em',
        paddingBottom: '6em'
    },
    title: {
        fontFamily: 'Ubuntu',
        fontSize: '4em'
    },
    picturePaper: {
        backgroundColor: '#ADD8E6',
        padding: '0.5em',
        marginBottom: '1.5em'
    },
    picture: {
        height: 'auto',
        width: 'auto'
    },
    summaryPaper: {
        backgroundColor: '#ADD8E6',
        padding: '1.5em',
        marginLeft: '1em',
        marginRight: '1em',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '10em',
            marginRight: '10em'
        }
    },
    summary: {
        fontFamily: 'Poppins'
    }
  }),
  {index: 1}
);

type Props = {}
const Summary = forwardRef<HTMLDivElement, Props>(( props, ref ) => {
    const classes = useStyles();

    return (
        <div className={classes.section} ref={ref}>
            <Typography align="center" gutterBottom variant="h2" className={classes.title}>Summary</Typography>

            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={1} md={3} />

                <Grid item xs={10} md={6}>
                    <Paper elevation={8} className={classes.picturePaper}>
                        <Avatar alt="AS" src={profile} variant="square" className={classes.picture}></Avatar>
                    </Paper>
                </Grid>

                <Grid item xs={1} md={3} />

                <Grid item md={1}/>

                <Grid item xs={12} md={10}>
                    <Paper elevation={4} className={classes.summaryPaper}>
                        <Typography className={classes.summary}>
                            I am a intermediate software developer and have a bachelor's degree in science 
                            with a major in computer science from the University of British Columbia Okanagan. 
                            My personal interests include full stack web application development. I have 
                            working experience with Angular and Node.js for enterprise web applications and 
                            pipeline development. My portfolio also consists of iOS mobile app development and 
                            React.js single page application development. I am familiar with AWS and its 
                            various services(EC2, S3, LAMBDA). I have always been a part of a scrum based agile 
                            team and strive to be a strong team player.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item md={1}/>
            </Grid>
        </div>
    )
})

export default Summary
