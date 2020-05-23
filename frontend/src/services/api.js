import axios from 'axios' //cliente html

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api