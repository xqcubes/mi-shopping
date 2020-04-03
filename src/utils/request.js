import axios from 'axios'

const server = axios.create({
  // baseURL: '/api', // process.env.VUE_APP_BASE_API
  baseURL: '/api',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})
server.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  }
)

//
server.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status === 0) {
      return res.data
    } else if (res.status === 10) {
      window.location.href = '/#/login'
      return Promise.reject(res)
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    Promise.reject(err)
  }
)

export default server
