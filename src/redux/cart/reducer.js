import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
      id: 1,
      product: {
        id: 1,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      qty: 2,
    },
    {
      id: 3,
      product: {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      },
      qty: 3,
    },
  ],
  open: false,
}

const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open
    },

    addNewCart: (state, action) => {
      console.log(action.payload)
      const existingCart = state.data.find((cart) => cart.product.id === action.payload.product.id)

      if (existingCart) {
        existingCart.qty = existingCart.qty + action.payload.qty
      } else {
        state.data.splice(0, 0, action.payload)
      }
    },
    incrementCart: (state, action) => {
      const existingCart = state.data.find((cart) => cart.id === action.payload.id)
      existingCart.qty++
    },
    decrementCart: (state, action) => {
      const existingCart = state.data.find((cart) => cart.id === action.payload.id)

      if (existingCart.qty <= 1) {
        state.data = state.data.filter((cart) => cart.id !== action.payload.id)
      } else {
        existingCart.qty--
      }
    },
    removeCart: (state, action) => {
      const cart_id = action.payload
      state.data = state.data.filter((cart) => cart.id !== cart_id)
    },
  },
})

export const cartActions = cartSlicer.actions

export default cartSlicer.reducer
