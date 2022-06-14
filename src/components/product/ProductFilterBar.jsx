import React from 'react'
import Card from '../UI/Card'
import Category from '../category'
import Brand from '../category/Brand'

const ProductFilterBar = () => {
  return (
    <div className='w-full bg-white shadow col-span-1'>
      <Category />
      <Brand />
    </div>
  )
}

export default ProductFilterBar
