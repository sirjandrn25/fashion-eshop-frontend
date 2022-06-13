import React from 'react'
import Login from '../components/auth/Login'
import Card from '../components/UI/Card'

const AuthPage = () => {
  return (
    <Card className='bg-white w-[500px] flex flex-col justify-center items-center'>
      <Login />

      <span className='my-3 text-lg text-medium cursor-pointer text-blue-500 hover:border-b-2 hover:border-blue-600'>
        Create An Account
      </span>
    </Card>
  )
}

export default AuthPage
