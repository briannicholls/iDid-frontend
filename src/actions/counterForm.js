import {API} from '../Constants.js'
import {REQUEST_ORIGIN} from '../Constants.js'

export const addCounter = counterData => {
  return dispatch => {
    fetch(API + '/counters', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': REQUEST_ORIGIN,
      },
      body: JSON.stringify(counterData)
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}
