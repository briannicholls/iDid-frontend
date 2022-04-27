import api from '../api'

// user sign up form submit
export const createUser = user => async dispatch => {
  dispatch({ type: 'LOADING' })
  return api.post('/users',  user )
  .then(resp => {
    if (resp.data.errors) {
      const errorMessage = resp.data.errors
      dispatch({ type: 'SET_LOGIN_ERROR', payload: errorMessage})
      return false
    } else {
      dispatch({ type: 'SET_CURRENT_USER', payload: resp.data })
      dispatch({ type: 'SET_VALUE', payload: 0 })
      return true
    }
  })
  .catch((err) => {
    console.error(err)
    return false
  })
}