export const submitCounterForm = (data) => {
  return dispatch => {
    fetch('http://localhost:3001/api/v1/counters', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
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
