import React from 'react'

import InputField from '../UI/InputField'
import Button from '../UI/Button'
import UseAuthContext from '../../context/auth-context'
import useHttp from '../../hooks/useHttp'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { isLoggedIn, login } = UseAuthContext()
  const { status, error, sendingHttpRequest } = useHttp()

  const location = useLocation()
  console.log(location)
  // console.log(isLoggedIn)
  if (isLoggedIn) {
    return <Navigate to={location.state ? location.state.pathname : '/'} replace={true} />
    // return navigate('/', { replace: true })
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const config = {
      method: 'post',
      url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKuP5sIym6HDWq84xKcf9FVNdhMvEWwek',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    }

    const response = await sendingHttpRequest(config)
    const expireTime = new Date().getTime() + 3600 * 1000

    if (response) {
      login(response.idToken, expireTime)
    }
  }

  return (
    <>
      <h2 className='text-2xl text-center font-bold text-purple-700'>Login Here</h2>
      <form action='' onSubmit={handleSubmit} className='w-full'>
        <InputField
          className='my-3'
          value={email}
          onChange={emailChangeHandler}
          placeholder='enter your email address'
          type='email'
          label='Email Address'
        />

        <InputField
          className='my-3'
          value={password}
          onChange={passwordChangeHandler}
          placeholder='enter your password'
          type='password'
          label='Password'
        />
        <Button className='bg-sky-500 hover:bg-sky-700 h-[40px] w-[120px] mt-2'>
          {status === 'pending' ? 'sending.....' : 'Login'}
        </Button>
      </form>
      {error && <p className='my-2 text-red-600'>{error}</p>}
    </>
  )
}

export default Login
