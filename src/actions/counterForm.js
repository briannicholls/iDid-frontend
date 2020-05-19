import {API} from '../Constants.js'

export const submitCounterForm = (data) => {
  return dispatch => {
    fetch(API + '/counters', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://silly-almeida-f17772.netlify.app',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}

export const updateCounterForm = (data) => {
  return {type: 'UPDATE_COUNTER_FORM', payload: data}
}
