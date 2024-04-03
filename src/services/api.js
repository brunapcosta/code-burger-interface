import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'https://code-burger-e6bbd6.netlify.app',
    withCredentials: false,
    // headers: {
    //     "Access-Control-Allow-Origin" : "*",
    // }
    // baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use( async config => {
    const userData = await localStorage.getItem('codeburger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    config.headers["Access-Control-Allow-Origin"] = "*"
    return config
})

    export default apiCodeBurger