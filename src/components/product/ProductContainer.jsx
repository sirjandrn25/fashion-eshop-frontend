import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { productActions } from '../../redux/product/reducer'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart/reducer'
import { fetchProducts } from '../../redux/product/asynActions'
import { addAsyncCart, updateAsyncCart } from '../../redux/cart/asynActions'
import ProductSearch from './ProductSearch'

const ProductContainer = () => {
  // const { getProducts } = productActions

  const { addNewCart } = cartActions
  const products = useSelector((state) => state.product.data)
  const httpStatus = useSelector((state) => state.httpStatus)
  const carts = useSelector((state) => state.cart.data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const addNewProductInCart = (product) => {
    const existingCart = carts.find((cart) => cart.product.id === product.id)
    if (!existingCart) {
      const cart = {
        id: Math.floor(Math.random() * 1000),
        product: product,
        qty: 1,
      }
      dispatch(addAsyncCart(cart))
    } else {
      const update_cart = {
        ...existingCart,
        qty: existingCart.qty + 1,
      }

      dispatch(updateAsyncCart('successfully increment cart', update_cart))
    }
  }

  return (
    <div className='col-span-3 flex flex-col'>
      <ProductSearch />
      <div className='w-full grid grid-cols-3 gap-2 '>
        {products.map((product) => {
          return <ProductCard product={product} addNewCart={addNewProductInCart} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default ProductContainer
