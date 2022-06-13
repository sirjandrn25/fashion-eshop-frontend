import React, { useEffect } from 'react'

import Card from '../UI/Card'

const CartItem = (props) => {
  return (
    <li className=' grid grid-cols-5 gap-1 w-full items-center  justify my-2'>
      <div className='flex flex-row items-center col-span-2 mx-3'>
        <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
          <img src={props.cart.product.image} className='h-full w-full' alt='' />
        </div>
        <div className='flex flex-col '>
          <span className='text-[16px] font-thin'>{props.cart.product.title}</span>
          <span className='text-[12px] text-gray-400 font-bold'>2022/02/04</span>
        </div>
      </div>

      <div className='flex flex-row items-center col-span-1 mx-3'>
        <span
          onClick={(e) => props.onDecrement(props.cart)}
          className='px-2 border-2 text-2xl font-bold text-red-500 border-red-500 cursor-pointer '>
          {'-'}
        </span>
        <span className='border-2 px-2 text-2xl mx-2 font-medium text-gray-500 border-gray-500'>{props.cart.qty}</span>
        <span
          onClick={(e) => props.onIncrement(props.cart)}
          className='px-2 border-2 text-2xl font-bold text-blue-600 border-blue-500 cursor-pointer'>
          {'+'}
        </span>
      </div>
      <div className='ml-5 flex flex-col col-span-1 mx-3'>
        <span className='text-xl font-sans font-medium '>
          ${(props.cart.qty * props.cart.product.price).toFixed(2)}
        </span>
        <span className='text-sm font-sans font-medium text-gray-400'>${props.cart.product.price} / per item</span>
      </div>
      <div className='col-span-1 flex justify-center'>
        <span
          onClick={(e) => props.onRemove(props.cart.id)}
          className='text-xl font-bold text-red-500 cursor-pointer mr-2'>
          X
        </span>
      </div>
    </li>
  )
}

export default CartItem
