import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './pages'
import ProductPage from './pages/product'
import CartPage from './pages/cart'
import AuthPage from './pages/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthProtected from './components/auth/AuthProtected'
import AccountPage from './pages/account'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}

    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route
            path='carts'
            element={
              <AuthProtected>
                <CartPage />
              </AuthProtected>
            }
          />
          <Route path='auth' element={<AuthPage />} />
          <Route
            path='account'
            element={
              <AuthProtected>
                <AccountPage />
              </AuthProtected>
            }
          />
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>

    {/* </Provider> */}
  </React.StrictMode>
)
