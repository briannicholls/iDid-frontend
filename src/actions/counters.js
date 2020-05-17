export const fetchCounters = () => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/counters', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'SET_COUNTERS', payload: json}))
  }
}
