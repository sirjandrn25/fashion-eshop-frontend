import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
})

let interval

const retriveToken = () => {
  const token = localStorage.getItem('token')
  const expirationTime = localStorage.getItem('expirationTime')

  return {
    token,
    expirationTime,
  }
}

const calculateRemainingTime = (expireTime) => {
  const curr_time = new Date().getTime()
  const remainingTime = +expireTime - curr_time
  return remainingTime
}

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const isLoggedIn = !!token

  // console.log(isLoggedIn)

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    clearInterval(interval)
  }
  const login = (token, expireTime) => {
    console.log(expireTime)
    setToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('expirationTime', expireTime)
    // const remainingTime = calculateRemainingTime(expireTime)

    // interval = setTimeout(logout, remainingTime)
  }
  useEffect(() => {
    const authInfo = retriveToken()
    if (authInfo.token && authInfo.expirationTime) {
      if (authInfo.expirationTime <= 0) {
        logout()
        return
      }
      setToken(authInfo.token)
      let remainingTime = calculateRemainingTime(authInfo.expirationTime)
      interval = setTimeout(logout, remainingTime)
    }

    return () => {}
  }, [token])

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

const UseAuthContext = () => useContext(AuthContext)

export default UseAuthContext
