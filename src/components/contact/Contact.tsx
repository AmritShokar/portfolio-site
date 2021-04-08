import styles from './Contact.module.css'

import { Box, Grid, Typography, makeStyles, createStyles, Theme, Avatar } from '@material-ui/core'

import letter from '../../res/letter.png'
import contact from '../../res/contact5.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: '#90EE90',
            padding: '5em'
        },
        typography: { // Delete
            fontFamily: 'Poppins',
            fontSize: '2em'
        },
        iconAvatar: {
            height: '5em',
            width: '6em'
        },
        contactAvatar: {
            height: 'auto',
            width: 'auto'
        },
        test: {
            align: 'center'
        }
    }),
);

const Contact = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={3} sm={2} md={3}/>

                <Grid item xs={9} sm={4} md={3} className={classes.test}>
                    {/* <img alt="icongeek26" src={letter} className={styles['image']} /> */}
                    <Avatar variant="square" src={letter} className={classes.iconAvatar} />
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    {/* <img alt="contact" src={contact} className={styles['contactImage']} /> */}
                    <Avatar variant="square" src={contact} className={classes.contactAvatar} />
                </Grid>

                <Grid item xs={12} sm={2} md={3}/>
            </Grid>
        </Box>
    )
}

export default Contact
