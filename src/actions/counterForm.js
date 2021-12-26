import {API} from '../Constants.js'

export const addCounter = counterData => {
  return dispatch => {
    fetch(API + '/counters', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(counterData)
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}
