import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './redux/cart/reducer'
import productReducer from './redux/product/reducer'
import httpStatusReducer from './redux/http_status_slicer'

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    httpStatus: httpStatusReducer,
  },
})

export default store
