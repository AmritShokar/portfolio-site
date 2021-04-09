import styles from './Landing.module.css'
import {AppBar, Toolbar, Button, Box, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core'

import landing from '../../res/kelowna-landing-image-2.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '100vh',
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
    buttonText: {
        fontFamily: 'Ubuntu'
    }
  }),
  {index: 1}
);

const Landing = ({ onScroll }: any) => {
    const classes = useStyles();
    return (
        <Box className={classes.background}>
            <Grid container>
                <Grid item xs={12}>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <Button>
                                <Typography variant="body1" className={classes.buttonText}>Home</Typography>
                            </Button>
                            <Button>
                                <Typography variant="body1" className={classes.buttonText}>Summary</Typography>
                            </Button>
                            <Button>
                                <Typography variant="body1" className={classes.buttonText}>Projects</Typography>
                            </Button>
                            <Button onClick={onScroll}>
                                <Typography variant="body1" className={classes.buttonText}>Contact</Typography>
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Landing
