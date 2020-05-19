import {API} from '../Constants.js'

export const updateActionForm = event => {
  return dispatch => {
    dispatch({type: 'UPDATE_ACTION_FORM', payload: event})
  }
}

export const addAction = actionData => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(API + '/actions', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://silly-almeida-f17772.netlify.app',
      },
      body: JSON.stringify(actionData)
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'ADD_ACTION', payload: json}))
  }
}
