import React from 'react'
import ProductCard from './ProductCard'
// import { productActions } from '../../redux/reducers/products'
// import { useSelector } from 'react-redux'

const product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
}

const ProductContainer = () => {
  // const { getProducts } = productActions
  // const products = useSelector((state) => state.product.data)

  return (
    <div className='w-[1100px] absolute top-[150px] grid grid-cols-4 gap-2 mt-10 '>
      {/* {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })} */}
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
    </div>
  )
}

export default ProductContainer
