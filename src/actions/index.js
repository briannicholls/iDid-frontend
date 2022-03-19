import api from '../api'

export const fetchUser = userId => async dispatch => {
  api.get(`/users/${userId}`)
  .then(response => {
    dispatch({ type: 'FETCH_USER', payload: response.data })
  })
}