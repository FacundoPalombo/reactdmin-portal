import { SET_DATA, GET_DATA } from '../reduxTypes'
export const setData = (payload = {}) => ({
    type: SET_DATA,
    payload
  }),
  getData = () => ({
    type: GET_DATA,
    payload: 'from get data'
  })
