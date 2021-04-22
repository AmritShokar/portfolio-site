import React, { forwardRef } from 'react'
import { Box, Grid, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import Weather from './Weather'

import landing from '../../res/kelowna-landing-image-4.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '110vh',
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '3em'
    },
    greeting: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0.3em',
            paddingTop: '0.5em',
        },
        paddingLeft: '1em',
        paddingTop: '1em',
        fontFamily: 'Train One',
        color: 'white',
    }
  }),
  {index: 1}
);

type Props = { }
const Landing = forwardRef<HTMLDivElement, Props>(( props, ref ) => {
    const classes = useStyles();

    return (
        <Box className={classes.background}>
            <Grid container>
                <Grid item xs={12}> 
                    <Typography variant="h2" className={classes.greeting}>Welcome</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Weather />
                </Grid>
            </Grid>
        </Box>
    )
})

export default Landing
