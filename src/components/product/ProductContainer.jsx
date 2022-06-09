import React from 'react'
import ProductCard from './ProductCard'
import { productActions } from '../../redux/product/reducer'
import { useSelector } from 'react-redux'

const ProductContainer = () => {
  // const { getProducts } = productActions
  const products = useSelector((state) => state.product.data)

  return (
    <div className='w-[1100px] absolute top-[150px] grid grid-cols-4 gap-2 mt-10 '>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
      {/* <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} /> */}
    </div>
  )
}

export default ProductContainer
