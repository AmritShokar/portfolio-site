import React, { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'
import { Box, Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

import httpClient from '../../lib/HttpClient'
import IWeather from '../../lib/IWeather'

const weatherConfig: AxiosRequestConfig = {
    method: 'GET',
    url: process.env.REACT_APP_SERVER_URL+'/general/weather',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SERVER_KEY}`
    }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1em',
            paddingTop: '0.5em',
        },
        paddingTop: '1em',
        paddingLeft: '6em'
    },
    temperature: {
        fontFamily: 'Ubuntu',
        color: 'white'
    }
  }),
  {index: 1}
);

const Weather = () => {
    const classes = useStyles()
    useEffect(() => {
        httpClient(weatherConfig, response)
    }, [])

    const [weatherData, setWeatherData] = useState<IWeather>()

    const response = (data: IWeather) => {
        setWeatherData(data)
    }

    return (
        <Box className={classes.section}>
            <Typography variant="h4" className={classes.temperature}>Kelowna</Typography>
            { weatherData && <Typography variant="h5" className={classes.temperature}>{Math.round(weatherData.temp)} °C</Typography> }
        </Box>
    )
}

export default Weather
