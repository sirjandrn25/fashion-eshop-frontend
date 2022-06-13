import React, { useEffect } from 'react'
import Navbar from './components/nav-header/Navbar'
import ProductContainer from './components/product/ProductContainer'
import CartContainer from './components/cart/CartContainer'
import StatusNotification from './components/UI/StatusNotification'
import Layout from './components/base/Layout'
import { fetchAsyncCarts } from './redux/cart/asynActions'
import { useDispatch } from 'react-redux'

import { Outlet } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncCarts())

    //
    return () => {}
  }, [])
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      {/* <CartContainer /> */}
    </>

    // <div className='h-full relative w-screen flex flex-col justify-center items-center bg-gray-200'>

    //   <Navbar />
    //   <ProductContainer />
    //   <CartContainer />
    //   <StatusNotification />
    // </div>
  )
}

export default App
