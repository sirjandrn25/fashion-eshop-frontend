import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  open: false,
}

const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open
    },
    fetchAllCarts: (state, action) => {
      state.data = action.payload
    },
    addNewCart: (state, action) => {
      // const existingCart = state.data.find((cart) => cart.product.id === action.payload.product.id)
      state.data.splice(0, 0, action.payload)

      // if (existingCart) {
      //   existingCart.qty = existingCart.qty + action.payload.qty
      // } else {

      // }
    },
    updateCart: (state, action) => {
      let existingCart = state.data.find((cart) => cart.id === action.payload.id)
      existingCart.qty = action.payload.qty
    },

    removeCart: (state, action) => {
      const cart_id = action.payload
      state.data = state.data.filter((cart) => cart.id !== cart_id)
    },
  },
})

export const cartActions = cartSlicer.actions

export default cartSlicer.reducer
