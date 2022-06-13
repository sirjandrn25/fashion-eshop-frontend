import React from 'react'

import InputField from '../UI/InputField'
import Button from '../UI/Button'

const Register = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <h2 className='text-2xl text-center font-bold text-purple-700'>Login Here</h2>
      <form action='' className='w-full'>
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
        <Button className='bg-sky-500 hover:bg-sky-700 h-[40px] w-[120px] mt-2'>Login</Button>
      </form>
    </>
  )
}

export default Register
