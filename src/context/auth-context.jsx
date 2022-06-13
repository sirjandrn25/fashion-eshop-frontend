import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
})

const retriveToken = () => {
  const token = localStorage.getItem('token')
  const expirationTime = localStorage.getItem('expireTime')

  return {
    token,
    expirationTime,
  }
}

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const isLoggedIn = !!token
  useEffect(() => {
    const authInfo = retriveToken()
    if (authInfo.token) {
      setToken(authInfo.token)
    }
    return () => {}
  }, [])
  console.log(isLoggedIn)

  const login = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
}

const UseAuthContext = () => useContext(AuthContext)

export default UseAuthContext
