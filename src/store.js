import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './redux/cart/reducer'
import productReducer from './redux/product/reducer'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

export default store
