// action creators
// https://www.npmjs.com/package/redux-thunk
// return function to delay dispatch
// inner function receives the store methods dispatch and getState as parameters
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}

export const getCurrentUser = user => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    const configObject = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(user)
    }

    return fetch('http://localhost:3001/api/v1/current_user', configObject)
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          dispatch({type: 'ERROR', payload: json.error})
        } else {
          dispatch(setCurrentUser(json))
        }
      })
      .catch(console.log)
  }
}
