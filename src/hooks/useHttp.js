import { useCallback, useState } from 'react'
import axios from 'axios'

const useHttp = () => {
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const sendingHttpRequest = useCallback(async (config) => {
    setStatus('pending')
    return await axios(config)
      .then((res) => {
        setStatus('success')
        return res.data
      })
      .catch((error) => {
        setStatus('failed')
        const err = error.response.data
        setError(err.error.message)
        return false
      })
  }, [])

  return {
    status,
    sendingHttpRequest,
    error,
  }
}

export default useHttp
