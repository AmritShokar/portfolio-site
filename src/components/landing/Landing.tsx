import './Landing.css'
import {AppBar, Toolbar, Button, Box} from '@material-ui/core'
import { Typography } from '@material-ui/core'

const Landing = () => {
    return (
        <div className="background">
            <Box className="header">
                <Typography className="logo">Amritpal's Portfolio</Typography>

                <AppBar position="static" style={{
                    backgroundColor: 'transparent',
                    boxShadow: '0px 0px 0px 0px',
                    alignItems: 'flex-end',
                    flex: 2
                }}>
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
