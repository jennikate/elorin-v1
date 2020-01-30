import { useState, useEffect } from 'react'

function useFetch(url, initialState = []) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => setData(resp)) 
      .catch(err => console.log(err))
    return () => console.log('Route changed')
  }, [])
  return data
}

export default useFetch