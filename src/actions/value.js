export const changeAppState = (val) => {
  return dispatch => {
    dispatch({type: 'SET_VALUE', payload: val})
    fetch('http://localhost:3001/state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({value: val})
    })
  }
}

export const getCurrentState = () => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3001/state', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(json => {

      if (json) {
        dispatch({type: 'SET_VALUE', payload: json.value})
      }
    })
  }
}
