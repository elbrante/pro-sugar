import axios, * as others from 'axios';
import {user_id} from "./dataUser";

axios.defaults.baseURL = 'https://thx-api-server.ru/prosugar'

const urlAddressForGetImg = 'https://thx-api-server.ru/prosugar/'

export const getSrcImg = {
    masters: (id) => urlAddressForGetImg + `master_photo/${id}`,
    services: (id) => urlAddressForGetImg + `service_photo/${id}`,
    stocks: (id) => urlAddressForGetImg + `stock_photo/${id}`,
    learn: (id) => urlAddressForGetImg + `learn_photo/${id}`
}

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

export const getAddress = () => {
    try {
        const response = axios.get('/address')
        return response
    } catch (err) {
        console.log(err)
    }

}

export const postMasters = (user_id, master_id) => {
    axios.post('/masters', {
        user_id: user_id,
        id: master_id,
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

export const postAddress = (address_id, user_id) => {
    axios.post('/address', {
        address_id: address_id,
        user_id: user_id,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}

export const postAllServices = (user_id, service_id) => {
    axios.post('/allServices', {
        user_id: user_id,
        id: service_id,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}
export const postStocks = (user_id, stock_id) => {
    axios.post('/stocks', {
        user_id: user_id,
        id: stock_id,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}

export const postLearn = (user_id, learn_id) => {
    axios.post('/learn', {
        user_id: user_id,
        id: learn_id,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res)
    })
}

export const getDataUser = (user_id) => {
    const response = axios.get(`/user_state/${user_id}`)
    return response
}

