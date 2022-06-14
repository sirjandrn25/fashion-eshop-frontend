import React from 'react'
import ProductContainer from '../components/product/ProductContainer'
import ProductFilterBar from '../components/product/ProductFilterBar'

const ProductPage = () => {
  return (
    <div className='w-[1250px]   grid grid-cols-4 gap-2'>
      <ProductFilterBar />
      <ProductContainer />
    </div>
  )
}

export default ProductPage
