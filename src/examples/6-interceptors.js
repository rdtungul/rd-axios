import { useEffect } from 'react'
// importing inceptors.js
import authFetch from '../axios/interceptors'

const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    // console.log('axios interceptors')
    // inceptors code for req and res functions
    try {
      // request and response headers -- checking the network console
      const res = await authFetch('/react-store-products')
      console.log(res)
    } catch (err) {
      console.log(err.res)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">interceptors</h2>
}
export default Interceptors
