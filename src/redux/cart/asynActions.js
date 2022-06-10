import { cartActions } from './reducer'
import axios from 'axios'
import { httpStatusActions } from '../http_status_slicer'

const api = 'http://localhost:4000/carts'

const { sendingHttpRequest, successHttpRequest, failedHttpRequest } = httpStatusActions
const { fetchAllCarts, updateCart, removeCart, addNewCart } = cartActions

export const fetchAsyncCarts = () => {
  return (dispatch) => {
    // dispatch(sendingHttpRequest('please wait! carts are fetching'))
    axios
      .get(api)
      .then((resp) => {
        dispatch(fetchAllCarts(resp.data))
        // dispatch(successHttpRequest('successfully carts are fetched'))
      })
      .catch((error) => {
        dispatch(failedHttpRequest("Opps! carts can't fetched"))
      })
  }
}

export const updateAsyncCart = (message, data) => {
  console.log(data)
  return (dispatch) => {
    dispatch(sendingHttpRequest('sending cart update request'))
    const config = {
      url: `${api}/${data.id}`,
      method: 'put',
      data: data,
    }

    axios(config)
      .then((resp) => {
        dispatch(updateCart(resp.data))
        dispatch(successHttpRequest(message))
      })
      .catch((error) => {
        console.log(error)
        dispatch(failedHttpRequest("Opps! cart can't update"))
      })
  }
}

export const removeAsyncCart = (cart_id) => {
  return (dispatch) => {
    dispatch(sendingHttpRequest('sending remove cart request'))

    const config = {
      url: `${api}/${cart_id}`,
      method: 'delete',
    }
    axios(config)
      .then((resp) => {
        dispatch(removeCart(cart_id))
        dispatch(successHttpRequest('successfully remove cart'))
      })
      .catch((error) => {
        dispatch(failedHttpRequest('failed to remove cart'))
      })
  }
}

export const addAsyncCart = (new_cart) => {
  return (dispatch) => {
    dispatch(sendingHttpRequest('new cart add request'))
    const config = {
      url: api,
      method: 'post',
      data: new_cart,
    }
    axios(config)
      .then((resp) => {
        dispatch(addNewCart(resp.data))
        dispatch(successHttpRequest('add new cart successfully'))
      })
      .catch((error) => {
        console.log(error)
        dispatch(failedHttpRequest('Opps!! failed to add new cart'))
      })
  }
}
