import axios from 'axios'

// custom.js code
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

// inceptors request
authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent')
    return request
  },
  (err) => {
    return Promise.reject(err)
  }
)

// inceptors response
authFetch.interceptors.response.use(
  (response) => {
    console.log('got response')
    return response
  },
  (err) => {
    console.log(err.response)
    if (err.response.status === 404) {
      console.log('NOT FOUND')
    }
    return Promise.reject(err)
  }
)

export default authFetch
