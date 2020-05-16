export const fetchUserActions = (userId) => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch(`http://localhost:3001/api/v1/users/${userId}/actions`)
      .then(resp => resp.json())
      .then(json => {
        return {type: 'ADD_ACTIONS', payload: json}
      })
  }
}
