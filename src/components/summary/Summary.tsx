import './Summary.css'
import { Box, Grid, Paper, Avatar } from '@material-ui/core'

const Summary = () => {
    return (
        <Box className="section">
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item md>
                    <Paper elevation={4}>
                        <Avatar alt="Amritpal Shokar" src="./profile-pic.png" />
                    </Paper>
                </Grid>
                <Grid item md>
                    <Paper elevation={4}>
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
