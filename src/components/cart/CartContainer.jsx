import React, { useEffect } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { cartActions } from '../../redux/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncCarts, updateAsyncCart, removeAsyncCart } from '../../redux/cart/asynActions'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Button from '../UI/Button'

const TotalCartItemPrice = (prevVal, currVal) => prevVal + currVal.product.price * currVal.qty

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
    <div className='w-[1200px] grid grid-cols-3 gap-3'>
      <Card className='col-span-2 bg-white'>
        <div className='my-3 flex flex-row w-full items-center justify-between border-b-2 p-2'>
          <span className='text-2xl font-bold'>Your Shoping Cart</span>
          <span className='text-lg font-medium text-blue-400 '>{cart.data.length} items </span>
        </div>
        {cart.data.length && (
          <ul className='w-full flex flex-col justify-center items-center'>
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
        )}
        {cart.data.length === 0 && <p className='text-xl text-purple-700'>No items found !!!</p>}
      </Card>
      <div className='w-full flex flex-col'>
        <Card className='bg-white col-span-1 '>
          <p>Have you coupon?</p>
          <div className='w-full my-2 flex flex-row items-center'>
            <Input /> <Button className='bg-cyan-400 ml-2 hover:bg-cyan-600 h-[40px]'>Apply</Button>
          </div>
        </Card>
        <Card className='bg-white mt-3'>
          <div className='w-full flex flex-row justify-between items-center text-lg text-gray-500 my-2'>
            <span>Total Price</span>
            <span>${cart.data.reduce(TotalCartItemPrice, 0).toFixed(3)}</span>
          </div>
          <div className='w-full flex flex-row justify-between items-center text-lg text-green-600 my-2'>
            <span>Discount</span>
            <span>-$60</span>
          </div>
          <div className='w-full flex flex-row justify-between items-center text-lg text-red-500 my-2'>
            <span>Tax</span>
            <span>13%</span>
          </div>

          <hr />
          <div className='w-full flex flex-row justify-between items-center text-xl text-purple-600 my-2'>
            <span>Total </span>
            <span>$3254</span>
          </div>

          <div className='flex flex-row items-center w-full my-3 justify-between'>
            <Button className='bg-green-500 hover:bg-green-700  h-[40px]'>Make Purchase</Button>
            <Button className='bg-teal-500  hover:bg-teal-700 h-[40px]'>Back To Shop</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CartContainer
