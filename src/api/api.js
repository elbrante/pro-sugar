import axios, * as others from 'axios';

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

export const postMasters = (name, level, experience) => {
    axios.post('/masters', {
        name: name,
        level: level,
        experience: experience
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

export const postAddress = (address) => {
    axios.post('/address', {
        address: address,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}

export const postAllServices = (nameService, price) => {
    axios.post('/allServices', {
        name: nameService,
        price: price,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}
export const postStocks = (nameStocks, price) => {
    axios.post('/stocks', {
        name: nameStocks,
        price: price,
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res.error)
    })
}

export const postLearn = (nameLearn, price) => {
    axios.post('/learn', {
        name: nameLearn,
        price: price
    }).then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res)
    })
}

