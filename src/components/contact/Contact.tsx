import styles from './Contact.module.css'

import { Box, Grid, Typography, makeStyles, createStyles, Theme, Avatar } from '@material-ui/core'

import letter from '../../res/letter.png'
import contact from '../../res/contact.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   typography: { // Delete
    fontFamily: 'Poppins',
    fontSize: '2em'
   },
   iconAvatar: {
       height: '5em',
       width: '6em'
   },
   contactAvatar: {
       height: '5em',
       width: '13em'
   }
  }),
);

const Contact = () => {
    const classes = useStyles()
    return (
        <Box className={styles["section"]}>
            <Grid container xs={12} alignItems="center" justify="center">
                <Grid item xs={3} />
                <Grid item xs={2}>
                    {/* <img alt="icongeek26" src={letter} className={styles['image']} /> */}
                    <Avatar variant="square" src={letter} className={classes.iconAvatar} />
                </Grid>
                <Grid item xs={3}>
                    {/* <img alt="contact" src={contact} className={styles['contactImage']} /> */}
                    <Avatar variant="square" src={contact} className={classes.contactAvatar} />
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Box>
    )
}

export default Contact
