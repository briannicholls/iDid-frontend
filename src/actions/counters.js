import {API} from '../Constants.js'

export const fetchCounters = () => {
  return dispatch => {
    fetch(API + '/counters', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}
