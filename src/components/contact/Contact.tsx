import styles from './Contact.module.css'
import { Box, Grid, Typography } from '@material-ui/core'

import letter from '../../res/letter.png'
import contact from '../../res/contact.png'

const Contact = () => {
    return (
        <Box className={styles["section"]}>
            <Grid container xs={12} alignItems="center">
                <Grid item xs={2} />
                <Grid item xs={5}>
                    <img alt="icongeek26" src={letter} className={styles['image']} />
                </Grid>
                <Grid item xs={4}>
                    <img alt="contact" src={contact} className={styles['contactImage']} />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Box>
    )
}

export default Contact
