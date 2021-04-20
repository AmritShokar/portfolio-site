import React, { useState, useEffect } from 'react'
import { AxiosRequestConfig } from 'axios'

import httpClient from '../../lib/HttpClient'
import IWeather from '../../lib/IWeather'

const weatherConfig: AxiosRequestConfig = {
    method: 'GET',
    url: process.env.REACT_APP_SERVER_URL+'/general/weather',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SERVER_KEY}`
    }
}

const response = (data: any) => {
    const currentWeather: IWeather = data
    console.log(currentWeather.temp)
}

const Weather = () => {
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        httpClient(weatherConfig, response)
    }, [])

    return (
        <div>
            hi
        </div>
    )
}

export default Weather
