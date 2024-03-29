// action creators
// https://www.npmjs.com/package/redux-thunk
// return function to delay dispatch
// inner function receives the store methods dispatch and getState as parameters

// ^^^ Leaving this comment here to remember how dumb I was when I started this project

import { API_URL } from '../Constants.js'

// execute only with valid user
export const setCurrentUser = user => {
    return dispatch => {
        dispatch({ type: 'SET_CURRENT_USER', payload: user })
    }
}

//logout
export const logout = () => {
    return function(dispatch) {
        dispatch({ type: 'LOADING' })
        fetch(API_URL + '/logout', {
                method: 'DELETE',
                credentials: 'include'
            })
            .then(resp => {
                dispatch({ type: 'CLEAR_CURRENT_USER' })
            })
            .then(json => console.log('clearing session'))
    }
}

//if a user is logged in, return user
export const getCurrentUser = () => {
    return dispatch => {
        dispatch({ type: 'LOADING' })

        return fetch(API_URL + '/current_user', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json())
            .then(json => {
                if (json && json.id) {
                    dispatch({ type: 'SET_CURRENT_USER', payload: json })
                } else {
                    dispatch({ type: 'CLEAR_CURRENT_USER' })
                }
            })
    }
}