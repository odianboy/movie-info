import axios from "axios"
import { API_KEY } from "../constants/api"


export const getData = (apiUrl: string, url: string, params?: {}) => {
    return axios.get(`${apiUrl}${url}`, {
        headers: {
        'X-API-KEY': API_KEY,
        },
        params: params
    })
}