import React from 'react'
import ProductCard from './ProductCard'
import { productActions } from '../../redux/product/reducer'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart/reducer'

const ProductContainer = () => {
  // const { getProducts } = productActions
  const { addNewCart } = cartActions
  const products = useSelector((state) => state.product.data)
  const dispatch = useDispatch()

  const addNewProductInCart = (product) => {
    const cart = {
      id: Math.floor(Math.random() * 1000),
      product: product,
      qty: 1,
    }
    dispatch(addNewCart(cart))
  }

  return (
    <div className='w-[1100px] absolute top-[150px] grid grid-cols-4 gap-2 mt-10 '>
      {products.map((product) => {
        return <ProductCard product={product} addNewCart={addNewProductInCart} key={product.id} />
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
