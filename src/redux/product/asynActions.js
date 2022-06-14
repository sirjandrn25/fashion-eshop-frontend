import { productActions } from './reducer'
import axios from 'axios'
import { httpStatusActions } from '../http_status_slicer'

const api = 'http://localhost:4000/products'

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(httpStatusActions.sendingHttpRequest('please wait! products are fetching'))
    return await axios
      .get(api)
      .then((resp) => {
        dispatch(productActions.getAllProducts(resp.data))
        dispatch(httpStatusActions.successHttpRequest('successfully fetch the products'))
      })
      .catch((error) => {
        dispatch(httpStatusActions.failedHttpRequest('failed to fetch the products'))
      })
  }
}


