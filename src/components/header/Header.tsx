import { MouseEvent, FC } from 'react'
import { Link } from 'react-router-dom'
import { Box, AppBar, Toolbar, Grid, Typography, Button, makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
        backgroundColor: 'white',
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
        color: 'black'
    },
    link: {
        textDecoration: 'none'
    }
  }),
  {index: 1}
);

interface Props {
    scrollTo: (e: MouseEvent<HTMLButtonElement>, compName: string) => void;
}

const Header:FC<Props> = ({ scrollTo }: Props ) => {
    const classes = useStyles()

    return (
        <Box>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>

                    <Grid container>
                        <Grid item>
                            <Button onClick={(e) => scrollTo(e, 'home')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Home</Typography>
                            </Button>
                            <Button onClick={(e) => scrollTo(e, 'summary')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Summary</Typography>
                            </Button>
                            <Button onClick={(e) => scrollTo(e, 'project')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Projects</Typography>
                            </Button>
                            <Button onClick={(e) => scrollTo(e, 'contact')} className={classes.button}>
                                <Typography variant="body1" className={classes.buttonText}>Contact</Typography>
                            </Button>
                            <Button onClick={(e) => scrollTo(e, 'contact')} className={classes.button}>
                                <Link to="/video" className={classes.link}>
                                    <Typography variant="body1" className={classes.buttonText}>Videos</Typography>
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
