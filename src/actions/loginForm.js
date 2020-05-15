import {setCurrentUser} from './currentUser'

export const submitCredentials = credentials => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    const configObject = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    }

    return fetch('http://localhost:3001/api/v1/login', configObject)
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          dispatch({type: 'ERROR', payload: json.error})
        } else {
          dispatch(setCurrentUser(json))
        }
      })
      .catch(console.log)
  }
}
