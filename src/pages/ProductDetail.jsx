import React from 'react'
import Card from '../components/UI/Card'

const ProductDetail = () => {
  return (
    <div className='w-[1000px] grid grid-cols-2 gap-3 '>
      <div className='flex flex-col w-full '>
        <Card className='w-full object-cover my-3'>
          <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' className='w-full h-full' alt='' />
        </Card>
        <div className='flex flex-row '>
          <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
            <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' className='w-full h-full' alt='' />{' '}
          </div>
          <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
            <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' className='w-full h-full' alt='' />{' '}
          </div>
          <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
            <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' className='w-full h-full' alt='' />{' '}
          </div>
          <div className='p-3 w-[80px] h-[80px] object-cover shadow rounded-lg mr-3'>
            <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' className='w-full h-full' alt='' />{' '}
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full p-3'>
        <h3 className='text-2xl font-semibold my-2'>Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h3>
        <div className='flex flex-row w-full items-center my-2'>
          <span className='mx-3'>4.5 stars</span>
          <span className='mx-3'>154 orders</span>
          <span className='mx-3 text-green-400'>In Stock</span>
        </div>
        <span className='text-purple-600 text-2xl font-semibold'>$174 /per box</span>
        <span className='w-full text-gray-400  my-3'>
          Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
          conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
        </span>
      </div>
    </div>
  )
}

export default ProductDetail
