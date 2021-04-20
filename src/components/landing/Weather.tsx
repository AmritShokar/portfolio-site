import React, { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'
import { Typography } from '@material-ui/core'

import httpClient from '../../lib/HttpClient'
import IWeather from '../../lib/IWeather'

const weatherConfig: AxiosRequestConfig = {
    method: 'GET',
    url: process.env.REACT_APP_SERVER_URL+'/general/weather',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SERVER_KEY}`
    }
}

// const [weatherData, setWeatherData] = useState({})

const Weather = () => {
    useEffect(() => {
        httpClient(weatherConfig, response)
    }, [])

    const [weatherData, setWeatherData] = useState<IWeather>()

    const response = (data: any) => {
        const currentWeather: IWeather = data
        setWeatherData(currentWeather)
    }

    return (
        <div>
            <Typography variant="h4">Kelowna</Typography>
            { weatherData && <Typography variant="h5">{weatherData.temp} °C</Typography> }
        </div>
    )
}

export default Weather
