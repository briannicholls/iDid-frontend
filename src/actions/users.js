import {API} from '../Constants.js'

export const createUser = (user) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(API + '/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://silly-almeida-f17772.netlify.app',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'SET_CURRENT_USER', payload: json }))
  }
}
