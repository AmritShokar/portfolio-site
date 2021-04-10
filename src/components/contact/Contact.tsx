import styles from './Contact.module.css'
import { Box, Grid, Avatar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import letter from '../../res/letter.png'
import contact from '../../res/contact5.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        section: {
            backgroundColor: '#90EE90',
            padding: '5em'
        },
        title: {
            fontFamily: 'Ubuntu',
            fontSize: '4em',
            paddingBottom: '1em'
        },
        iconAvatar: {
            height: 'auto',
            width: 'auto'
        },
        contactAvatar: {
            height: 'auto',
            width: 'auto'
        }
    }),
    {index: 1}
);

const Contact = ({ getRef }: any) => {
    const classes = useStyles()
    return (
        <Box className={classes.section} flexDirection="column">
            <Typography align="center" gutterBottom variant="h2" className={classes.title}>Contact</Typography>

            <Grid container alignItems="center" justify="center" ref={getRef}>
                <Grid item xs={2} md={3}/>

                <Grid item xs={8} md={2}>
                    <Avatar variant="square" src={letter} className={classes.iconAvatar} />
                </Grid>

                <Grid item xs={2} md={1} />

                <Grid item xs={12} md={3}>
                    <Avatar variant="square" src={contact} className={classes.contactAvatar} />
                </Grid>

                <Grid item md={3}/>
            </Grid>

        </Box>
    )
}

export default Contact
