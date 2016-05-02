import * as types from './actionTypes'
import { BASE_API_URL } from '../../constants'

const registerUserRequest = () => {
  return {
    type: types.REGISTER_USER_REQUEST
  }
}

const registerUserFailure = () => {
  return {
    type: types.REGISTER_USER_FAILURE
  }
}

const registerUserSuccess = (response) => {
  return {
    type: types.REGISTER_USER,
    response
  }
}

export const registerUser = (user) => {
  const defaultUser = {
    ExternalOrganizationId: "",
    CountryId: "(null)",
    Sex: 1,
    AccountType: 1
  }

  return (dispatch) => {
    dispatch(registerUserRequest())
    const userData = {...defaultUser, ...user}
    return fetch(BASE_API_URL, {
      method: 'post',
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(json => {
      console.log('i am response', json)
      alert('yayyy')
      dispatch(registerUserSuccess(userData))
    })
    .catch((error) => {
      console.log('i am error', error)
      dispatch(registerUserFailure(error))
    })
  }
}
