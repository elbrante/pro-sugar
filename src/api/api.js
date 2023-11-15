import axios, * as others from 'axios';

axios.defaults.baseURL = 'https://thx-api-server.ru/prosugar'

export const getMasters = () => {
    try {
        const response = axios.get('/masters')
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllServices = () => {
    try {
        const response = axios.get('/allServices')
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getStocks = () => {
    try {
        const response = axios.get('/stocks')
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getLearn = () => {
    try {
        const response = axios.get('/learn')
        return response
    } catch (err) {
        console.log(err)
    }
}

