import React, { useEffect } from 'react'
import Navbar from './components/nav-header/Navbar'
import ProductContainer from './components/product/ProductContainer'
import CartContainer from './components/cart/CartContainer'
import StatusNotification from './components/UI/StatusNotification'
import Layout from './components/base/Layout'
import { fetchAsyncCarts } from './redux/cart/asynActions'
import { useDispatch } from 'react-redux'
import ContextProvider from './context'
import { Outlet } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncCarts())

    //
    return () => {}
  }, [])
  return (
    <ContextProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ContextProvider>
  )
}

export default App
