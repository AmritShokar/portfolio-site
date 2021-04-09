import styles from './Landing.module.css'
import {AppBar, Toolbar, Button, Box, makeStyles, createStyles, Theme} from '@material-ui/core'

import landing from '../../res/kelowna-landing-image.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
        height: '100vh',
        backgroundImage: `url(${landing})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    AppBar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        alignItems: 'flex-end',
        flex: 2
    }
  }),
);

const Landing = () => {
    const classes = useStyles();
    return (
        <Box className={classes.background}>
            {/* <Typography className={styles["logo"]}>Amritpal's Portfolio</Typography> */}

            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <Button>Home</Button>
                    <Button>Summary</Button>
                    <Button>Skills</Button>
                    <Button>Projects</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Landing
