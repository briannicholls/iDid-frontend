import {API} from '../Constants.js'
export const fetchUserActions = (userId) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(`${API}/users/${userId}/actions`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://silly-almeida-f17772.netlify.app',
      }
    })
      .then(resp => resp.json())
      .then(json => {
        debugger
        if (json.actions) {
          dispatch({type: 'SET_USER_ACTIONS', payload: json})
        } else {
          console.log(json)
        }
      })
  }
}

export const addAction = (action) =>{
  return dispatch => {
    fetch(`${API}/users/${action.userId}/actions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action)
    })
    .then(resp => resp.json())
    .then(json => fetchUserActions(action.userId))
  }
}
