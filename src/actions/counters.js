import {API} from '../Constants.js'
import {REQUEST_ORIGIN} from '../Constants.js'


export const fetchCounters = () => {
  return dispatch => {
    fetch(API + '/counters', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': REQUEST_ORIGIN,
      }
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}
