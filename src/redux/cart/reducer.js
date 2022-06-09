import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
      id: 5,
      date: '2020-03-01T00:00:02.000Z',
      product: {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 245.45,
      },
      qty: 2,
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
  },
})

export const cartActions = cartSlicer.actions

export default cartSlicer.reducer
