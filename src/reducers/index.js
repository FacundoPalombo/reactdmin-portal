import { GET_DATA, SET_DATA } from '../reduxTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload }
    case SET_DATA:
      return { ...state, data: action.payload }
    default:
      return { ...state, data: 'default, but in reducer' }
  }
}

export default reducer
