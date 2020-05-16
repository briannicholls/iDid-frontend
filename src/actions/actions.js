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
        console.log(json)
        return {type: 'ADD_ACTIONS', payload: json}
      })
  }
}
