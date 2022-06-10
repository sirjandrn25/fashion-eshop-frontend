import React, { useEffect } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { cartActions } from '../../redux/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncCarts, updateAsyncCart, removeAsyncCart } from '../../redux/cart/asynActions'

const CartContainer = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    let interval = setTimeout(() => {
      dispatch(fetchAsyncCarts())
    }, 3000)
    //
    return () => clearInterval(interval)
  }, [])
  // const [open, setOpen] = React.useState(true)
  const { toggleOpen } = cartActions

  const closeHandler = () => {
    dispatch(toggleOpen())
    // setOpen(!open)
  }

  const incrementHandler = (cart) => {
    const update_cart = {
      ...cart,
      qty: cart.qty + 1,
    }
    dispatch(updateAsyncCart('cart increment successfully', update_cart))
  }
  const decrementHandler = (cart) => {
    if (cart.qty > 1) {
      const update_cart = {
        ...cart,
        qty: cart.qty - 1,
      }
      dispatch(updateAsyncCart('cart decrement successfully', update_cart))
    } else {
      dispatch(removeAsyncCart(cart.id))
    }
  }

  const removeCartHandler = (cart_id) => {
    dispatch(removeAsyncCart(cart_id))
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
