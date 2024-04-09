import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'https://burger-good-ea18.up.railway.app/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
    // baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use( async config => {
    const userData = await localStorage.getItem('codeburger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

    export default apiCodeBurger