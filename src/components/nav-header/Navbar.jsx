import React from 'react'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/cart/reducer'
import { NavLink } from 'react-router-dom'
import BtnLink from '../UI/BtnLink'
import UseAuthContext from '../../context/auth-context'
import { useNavigate } from 'react-router-dom'

const totalQtyReducer = (prevState, currState) => prevState + currState.qty

const Navbar = () => {
  const { toggleOpen } = cartActions
  const carts = useSelector((state) => state.cart.data)
  const { isLoggedIn, logout } = UseAuthContext()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate('/auth', { replace: true })
  }

  // console.log(toggleOpen)

  return (
    <nav className=' z-40 bg-black py-5 px-9 flex flex-row justify-between items-center  fixed top-0 left-0 right-0  shadow '>
      <div>
        <span className='text-2xl font-bold text-white'>Daraj Shop</span>
      </div>
      <div>
        <ul className='flex flex-row items-center'>
          <li className='mx-2'>
            <NavLink to='/products' className={'text-white text-lg font-medium'}>
              Products
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li className='mx-2'>
              <NavLink to='/auth' className={'text-white text-lg font-medium'}>
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li className='mx-2'>
                <BtnLink
                  href='/carts'
                  // onClick={(e) => dispatch(toggleOpen())}
                  className='bg-black/40 border-2 flex items-center border-cyan-400 hover:bg-blue-400 h-[40px]'>
                  <span className=' font-bold mr-2'>Cart</span>
                  <span className='text-white  font-medium bg-blue-500 px-2 rounded-full'>
                    {carts.reduce(totalQtyReducer, 0)}
                  </span>
                </BtnLink>
              </li>
              <li className='mx-2'>
                <Button onClick={logoutHandler} className='border-2 border-yellow-400 hover:bg-yellow-500  h-[40px]'>
                  Logout
                </Button>
              </li>
              <li className='mx-2'>
                <NavLink to='/account' className={'text-white text-lg font-medium'}>
                  Account
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
