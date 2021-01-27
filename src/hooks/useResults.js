import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'Toronto',
        },
      })
      setResults(response.data.businesses)
    } catch (error) {
      console.log(error)
      setErrorMessage('Oops! Something went wrong.')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}