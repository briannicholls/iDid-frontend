import {API} from '../Constants.js'

export const changeAppState = (val) => {
  return (dispatch) => {
    dispatch({type: 'SET_VALUE', payload: val})

    const configObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(val)
    }
    fetch(API + '/state', configObject)
  }
}

export const getCurrentState = (userId) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(API + '/state', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://silly-almeida-f17772.netlify.app',
      }
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: 'SET_VALUE', payload: json})
      // if (json === 2) {
      //   fetchUserActions(userId)
      // }
    })
  }
}
