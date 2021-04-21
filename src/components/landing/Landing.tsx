import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Button, Box, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core'

import Weather from './Weather'

import landing from '../../res/kelowna-landing-image-4.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '110vh',
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        alignItems: 'flex-end',
        flex: 2
    },
    button: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '1em',
            marginRight: '1em'
        }
    },
    buttonText: {
        fontFamily: 'Ubuntu',
        color: 'white'
    },
    greeting: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '1em',
            paddingTop: '0.5em'
        },
        fontFamily: 'Train One',
        color: 'white',
    }
  }),
  {index: 1}
);

type Props = { onScroll: any }
const Landing = forwardRef<HTMLDivElement, Props>(( props, ref ) => {
    const classes = useStyles();
    return (
        <Box className={classes.background}>
            <Grid container>
                <Grid item xs={12} md={4}> 
                    <Typography variant="h2" className={classes.greeting}>Welcome</Typography>
                </Grid>
                
                <Grid item xs={12} md={8}>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <Button onClick={(e) => props.onScroll(e, 'home')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Home</Typography>
                            </Button>
                            <Button onClick={(e) => props.onScroll(e, 'summary')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Summary</Typography>
                            </Button>
                            <Button onClick={(e) => props.onScroll(e, 'project')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Projects</Typography>
                            </Button>
                            <Button onClick={(e) => props.onScroll(e, 'contact')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Contact</Typography>
                            </Button>
                            <Link to="/video" className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>VIDEOS</Typography>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Weather />
                </Grid>
            </Grid>
        </Box>
    )
})

export default Landing
