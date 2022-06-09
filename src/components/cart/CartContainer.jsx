import React from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { cartActions } from '../../redux/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {
  const cart = useSelector((state) => state.cart)
  // const [open, setOpen] = React.useState(true)
  const { toggleOpen, incrementCart, decrementCart, removeCart } = cartActions
  const dispatch = useDispatch()

  const closeHandler = () => {
    dispatch(toggleOpen())
    // setOpen(!open)
  }

  const incrementHandler = (cart) => {
    dispatch(incrementCart(cart))
  }
  const decrementHandler = (cart) => {
    dispatch(decrementCart(cart))
  }

  const removeCartHandler = (cart_id) => {
    dispatch(removeCart(cart_id))
  }

  return (
    <Modal onClose={closeHandler} open={cart.open}>
      <div className='w-[900px] h-[500px]'>
        <ul className='w-full'>
          {cart.data.map((cart) => {
            return (
              <CartItem
                onRemove={removeCartHandler}
                onIncrement={incrementHandler}
                onDecrement={decrementHandler}
                cart={cart}
                key={cart.id}
              />
            )
          })}
        </ul>
      </div>
    </Modal>
  )
}

export default CartContainer
