import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.data = action.payload
    },
  },
})

export const productActions = productSlice.actions

export default productSlice.reducer
