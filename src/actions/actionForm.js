export const updateActionForm = event => {
  return dispatch => {
    dispatch({type: 'UPDATE_ACTION_FORM', payload: event})
  }
}

export const addAction = actionData => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3001/api/v1/actions', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actionData)
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'ADD_ACTION', payload: json}))
  }
}
