import { useEffect } from 'react'
import UseAuthContext from '../../context/auth-context'
import { useNavigate, Navigate } from 'react-router-dom'

const AuthProtected = ({ children }) => {
  const { isLoggedIn } = UseAuthContext()

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      return <Navigate to='/auth' replace={true} />
    }
    return () => {}
  }, [isLoggedIn])
  //   const navigate = useNavigate()

  //   console.log(isLoggedIn)
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate('/auth', { replace: true })
  //       return
  //     }
  //     return () => {}
  //   }, [])
  return children
  //   navigate('/auth', { replace: true })
}

export default AuthProtected
