import styles from './Start.module.css'
import { Box, Grid, makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        fontFamily: 'Ubuntu',
        fontSize: '4em'
    }
  }),
);

const Start = () => {
    return (
        <Box>
            <Grid container>

            </Grid>
        </Box>
    )
}

export default Start
