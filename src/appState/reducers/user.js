import * as types from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  error: null
}

export default user = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return {
        ...state,
        ...action.response,
        isLoading: false
      }
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}
