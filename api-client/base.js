import axios from 'axios'
import { request } from 'https';

const API_URL = 'http://light-it-04.tk/api/'

const mainRequest = (method, path, data) => {
    return axios({
        method: method,
        url: `${API_URL}${path}`,
        data: data
    })
}

const authorizeRequest = (method, path, data, token) => {
    return axios({
        method: method,
        url: `${API_URL}${path}`,
        data: data,
        headers: {
			'Content-Type': 'application/json',
			'Authorization': 'JWT ' + token,
		},
    })
}

export const get = (path, data) => ('GET', path, data)
export const post = (path, data) => request("POST", path, data)