import {API} from '../Constants.js'
// import {REQUEST_ORIGIN} from '../Constants.js'

export const addAction = actionData => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(API + '/actions', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(actionData)
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch({type: 'ADD_ACTION', payload: json})
      })
  }

}
