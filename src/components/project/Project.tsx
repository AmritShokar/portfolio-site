import styles from './Project.module.css'
import { Box, Grid, Paper, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

const Project = () => {
    return (
        <Box className={styles["section"]}>
            <Grid container>
                <Grid item>
                    Hi
                </Grid>
                <Grid item>
                    Ho
                </Grid>
            </Grid>
        </Box>
    )
}

export default Project
