import styles from './Summary.module.css'
import { Box, Grid, Paper, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import profile from '../../res/profile.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    picturePaper: {
      backgroundColor: '#90EE90'
    },
    summaryPaper: {
        backgroundColor: '#90EE90',
        marginLeft: '10em',
        marginRight: '10em'
    }
  }),
);

const Summary = () => {
    const classes = useStyles();

    return (
        <Box className={styles["section"]}>
            <Typography align="center" gutterBottom variant="h2" className={styles["title"]}>Summary</Typography>
            <Grid container direction="column" justify="flex-end" alignItems="center" spacing={7}>
                <Grid item xs>
                    <Paper elevation={4} className={classes.picturePaper}>
                        <img alt="Amritpal Shokar" srcSet={profile} className={styles["picture"]}/>
                    </Paper>
                </Grid>
                <Grid item md className={styles["summaryBacking"]}>
                    <Paper elevation={4} className={classes.summaryPaper}>
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
