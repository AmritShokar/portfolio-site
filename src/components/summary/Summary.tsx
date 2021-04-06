import React from 'react'

import './Summary.css'
import { Box, Grid, Paper, Avatar, Typography } from '@material-ui/core'

import profile from '../../res/profile.png'

const Summary = () => {
    return (
        <Box padding="1em" className="section">
            <Typography align="center" gutterBottom variant="h2" className="title">Summary</Typography>
            <Grid container direction="column" justify="flex-end" alignItems="center" spacing={7}>
                <Grid item xs>
                    <Paper elevation={4} className="pictureBacking">
                        <img alt="Amritpal Shokar" srcSet={profile} className="picture"/>
                    </Paper>
                </Grid>
                <Grid item md className="summaryBacking">
                    <Paper elevation={4} className="summary">
                        Nunc leo felis, sollicitudin vitae lorem at, iaculis vehicula lacus. Cras rutrum nulla 
                        non mauris vestibulum, sit amet fringilla dui porttitor. Aenean molestie at felis ut 
                        porttitor. In vel semper justo. Nulla vitae purus eget massa maximus porta. Cras 
                        venenatis diam rhoncus odio accumsan, quis mollis risus vestibulum. Ut in erat sagittis, 
                        consectetur metus vitae, pretium arcu.
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Summary
