export const changeAppState = (val) => {
  return (dispatch) => {
    dispatch({type: 'SET_VALUE', payload: val})

    const configObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(val)
    }
    fetch('http://localhost:3001/state', configObject)
  }
}

export const getCurrentState = (userId) => {
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
      dispatch({type: 'SET_VALUE', payload: json})
      // if (json === 2) {
      //   fetchUserActions(userId)
      // }
    })
  }
}
