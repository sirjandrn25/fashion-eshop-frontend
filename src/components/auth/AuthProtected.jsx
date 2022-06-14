import { useEffect } from 'react'
import UseAuthContext from '../../context/auth-context'
import { Navigate, useLocation } from 'react-router-dom'

const AuthProtected = ({ children }) => {
  const { isLoggedIn } = UseAuthContext()
  const location = useLocation()
  console.log(location)
  // useEffect(() => {}, [])

  // useEffect(() => {
  //   console.log(isLoggedIn)
  //   if (!isLoggedIn) {
  //     return <Navigate to='/auth' replace={true} />
  //   }
  //   return () => {}
  // }, [isLoggedIn])
  if (!isLoggedIn) return <Navigate to='/auth' state={{ pathname: location.pathname }} />

  return children
  //   navigate('/auth', { replace: true })
}

export default AuthProtected
