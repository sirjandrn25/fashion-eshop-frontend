import React from 'react'
import Card from '../UI/Card'

const CartItem = () => {
  return (
    <li className='p-3 grid grid-cols-4 gap-2 w-full items-center'>
      <div className='flex flex-row items-center col-span-2'>
        <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
          <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' className='h-full w-full' alt='' />
        </div>
        <div className='flex flex-col '>
          <span className='text-[16px] font-thin'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
          <span className='text-[12px] text-gray-400 font-bold'>2022/02/04</span>
        </div>
      </div>

      <div className='flex flex-row items-center'>
        <select
          name=''
          className='w-[80px] px-2 py-1 bg-gray-50 border-2 text-gray-600 focus:outline-none rounded-lg focus:border-sky-300'
          id=''>
          <option selected value='1'>
            1
          </option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <div className='ml-5 flex flex-col'>
          <span className='text-xl font-sans font-medium '>$22.45</span>
          <span className='text-sm font-sans font-medium text-gray-400'>$456.02 / per item</span>
        </div>
      </div>
      <div>
        <span className='text-xl font-bold text-red-500 cursor-pointer mr-2'>X</span>
      </div>
    </li>
  )
}

export default CartItem
