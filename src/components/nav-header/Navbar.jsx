import React from 'react'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart/reducer'

const Navbar = () => {
  const { toggleOpen } = cartActions
  const dispatch = useDispatch()
  // console.log(toggleOpen)

  return (
    <nav className='w-full z-40 bg-black p-5 flex flex-row justify-around items-center fixed top-0 left-0 right-0 shadow  '>
      <div>
        <span className='text-2xl font-bold text-white'>Daraj Shop</span>
      </div>
      <div>
        <Button
          onClick={(e) => dispatch(toggleOpen())}
          className='bg-black/40 border-2 flex items-center border-cyan-400 hover:bg-blue-400'>
          <span className='text-xl font-bold mr-2'>Cart</span>
          <span className='text-white  font-medium bg-blue-500 px-2 rounded-full'>4</span>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
