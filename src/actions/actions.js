import api from '../api'
import { API_URL } from '../Constants.js'

export const fetchUserActions = userId => async dispatch => {
  return await api.get(`${API_URL}/users/${userId}/actions`)
  .then(response => {
    dispatch({ type: 'SET_USER_ACTIONS', payload: { user_id: userId, actions: response.data } })
  })
}

export const addAction = action => async dispatch => {
  return await api.post(`${API_URL}/users/${action.user_id}/actions`, JSON.stringify(action))
  .then(response => {
    dispatch({ type: 'ADD_ACTION', payload: response.data })
  })
}
