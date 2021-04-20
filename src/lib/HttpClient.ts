import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const httpRequest = async (config: AxiosRequestConfig, callback: (data: any) => void) => {
    console.log('making axios request')
    axios(config)
    .then((response: AxiosResponse) => {
        callback(response.data)
    })
    .catch((error: AxiosError) => {
        console.log(`http client error: ${error.message}`)
    })
}

export default httpRequest