import axios from "axios";

const fabelioInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    transformRequest: [(data, headers) => {
        if(data){
            if(data.data)
                return {...data.data}
            else
                return data
        }

        return data
    }, ...axios.defaults.transformRequest]
})

export const create = (data) => {
    return fabelioInstance
        .post('submission', data)
}

export const getById = (id) => {
    return fabelioInstance
        .get(`submission/${id}`)
}

export const get = () => {
    return fabelioInstance
        .get('submission/list')
}