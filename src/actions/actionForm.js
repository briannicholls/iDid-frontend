import {API} from '../Constants.js'

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
    .then(json => {
      console.log(9)
      dispatch({type: 'ADD_ACTION', payload: json}
    )})
    console.log(10)

  }

}
