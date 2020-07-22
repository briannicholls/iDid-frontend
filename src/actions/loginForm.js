// import {setCurrentUser} from './currentUser'
import {API} from '../Constants.js'

export const submitCredentials = (credentials) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    const configObject = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://idid.netlify.app',
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    }

    return fetch(API + '/login', configObject)
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          dispatch({type: 'ERROR', payload: json.error})
        } else {
          dispatch({type: 'SET_CURRENT_USER', payload: json})
        }
      })
      .catch(console.log)
  }
}
