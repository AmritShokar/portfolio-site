import styles from './Landing.module.css'
import {AppBar, Toolbar, Button, Box, makeStyles, createStyles, Theme} from '@material-ui/core'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        <div className={styles["background"]}>
            <Box className="header">
                <Typography className={styles["logo"]}>Amritpal's Portfolio</Typography>

                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        <Button>Home</Button>
                        <Button>Summary</Button>
                        <Button>Skills</Button>
                        <Button>Projects</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Landing
