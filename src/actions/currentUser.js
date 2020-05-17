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

//clear current user from store (front end log out)
export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

//async actions

//logout
export const logout = () => {
  return function (dispatch) {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3001/api/v1/logout', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(dispatch(clearCurrentUser()))
  }
}

//if a user is logged in, return user
export const getCurrentUser = () => {
  return dispatch => {
    dispatch({type: 'LOADING'})
    const configObject = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      }
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
