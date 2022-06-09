import React from 'react'
import Navbar from './components/nav-header/Navbar'
import ProductContainer from './components/product/ProductContainer'
import CartContainer from './components/cart/CartContainer'

const App = () => {
  return (
    <div className='h-full relative w-screen flex flex-col justify-center items-center bg-gray-200'>
      <Navbar />
      <ProductContainer />
      <CartContainer />
    </div>
  )
}

export default App
