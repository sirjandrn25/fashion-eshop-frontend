import React from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { cartActions } from '../../redux/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {
  const cart = useSelector((state) => state.cart)
  // const [open, setOpen] = React.useState(true)
  const { toggleOpen } = cartActions
  const dispatch = useDispatch()

  const closeHandler = () => {
    dispatch(toggleOpen())
    // setOpen(!open)
  }

  return (
    <Modal onClose={closeHandler} open={cart.open}>
      <div className='w-[1200px] h-[500px]'>
        <ul className='w-full'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
    </Modal>
  )
}

export default CartContainer
