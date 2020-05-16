export const createUser = (user) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(json => dispatch({type: 'SET_CURRENT_USER', payload: json }))
  }
}
