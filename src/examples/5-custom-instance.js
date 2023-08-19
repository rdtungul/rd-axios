import { useEffect } from 'react'
// custom instance code from custom.js file
import authFetch from '../axios/custom'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    // console.log('custom axios instance')
    try {
      // response 1 for products url (custom.js)
      const res1 = await authFetch('/react-store-products')
      // response 2 for randomUserUrl link
      const res2 = await axios(randomUserUrl)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance
