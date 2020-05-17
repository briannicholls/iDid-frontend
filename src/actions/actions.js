export const fetchUserActions = (userId) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3001/api/v1/users/${userId}/actions`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(json => {
        if (json && typeof json === 'object') {
          dispatch({type: 'SET_USER_ACTIONS', payload: json})
        }
      })
  }
}

export const addAction = (action) =>{
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/users/${action.userId}/actions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action)
    })
    .then(resp => resp.json())
    .then(json => fetchUserActions(action.userId))
  }
}
