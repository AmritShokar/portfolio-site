import styles from './Landing.module.css'
import {AppBar, Toolbar, Button, Box, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core'

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
        marginLeft: '1em',
        marginRight: '1em'
    },
    buttonText: {
        fontFamily: 'PT Serif',
        color: 'white'
    },
    greeting: {
        fontFamily: 'Train One',
        color: 'white',
        paddingLeft: '1em',
        paddingTop: '1em'
    }
  }),
  {index: 1}
);

const Landing = ({ onScroll }: any) => {
    const classes = useStyles();
    return (
        <Box className={classes.background}>
            <Grid container>
                <Grid item md={4}> 
                    <Typography variant="h1" className={classes.greeting} >Welcome</Typography>
                </Grid>
                
                <Grid item xs={8}>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <Button className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Home</Typography>
                            </Button>
                            <Button className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Summary</Typography>
                            </Button>
                            <Button className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Projects</Typography>
                            </Button>
                            <Button onClick={onScroll} className={classes.button}>
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
