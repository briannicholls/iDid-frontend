// action creators
// https://www.npmjs.com/package/redux-thunk
// return function to delay dispatch
// inner function receives the store methods dispatch and getState as parameters

// ^^^ Leaving this comment here to remember how dumb I was when I started this project

import {fetchUserActions} from './actions'

export const setCurrentUser = user => {
  return dispatch => {
    dispatch({type: 'SET_CURRENT_USER', payload: user})
    fetchUserActions(user)
  }
}

//async actions

//logout
export const logout = () => {
  return function (dispatch) {
    dispatch({type: 'LOADING'})
    fetch('http://localhost:3001/api/v1/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(resp => {
        // debugger
        dispatch({type: 'CLEAR_CURRENT_USER'})
      })
      .then(json => console.log('clearing session'))
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
