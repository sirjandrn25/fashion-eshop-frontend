import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: '',
  title: '',
  message: '',
  showStatus: false,
}

const statusSlicer = createSlice({
  name: 'httpStatus',
  initialState,
  reducers: {
    sendingHttpRequest: (state, action) => {
      state.showStatus = true
      ;(state.status = 'pending'), (state.title = 'sending request .......'), (state.message = action.payload.message)
    },
    successHttpRequest: (state, action) => {
      state.status = 'success'
      ;(state.title = 'Success ! '), (state.message = action.payload)
    },
    failedHttpRequest: (state, action) => {
      state.status = 'failed'
      state.title = 'Failed !'
      state.message = action.payload
    },
    closeHttpStatus: (state) => {
      ;(state.showStatus = false), (state.status = ''), (state.title = ''), (state.message = '')
    },
  },
})

export const httpStatusActions = statusSlicer.actions

export default statusSlicer.reducer
