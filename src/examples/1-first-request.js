import { useEffect } from 'react'
// axios configuration
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  // axios code
  const fetchData = async () => {
    try {
      // axios.get(), axios.post(), axios.put(), axios.delete()
      const response = await axios(url)
      // console.log(response)

      // adding a data response
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
    // console.log('first axios request')
  }, [])

  return <h2 className="text-center">first request</h2>
}
export default FirstRequest
