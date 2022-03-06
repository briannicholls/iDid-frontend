import { API_URL } from '../Constants.js'

// POST with new app state
export const changeAppState = (val) => {
    return (dispatch) => {
        fetch(API_URL + '/state', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(val)
            })
            .then(resp => resp.json())
            .then(json => {
                // server response should be same as payload
                if (json >= 0) {
                    dispatch({ type: 'SET_VALUE', payload: json })
                } else {
                    dispatch({ type: 'SET_VALUE', payload: 5 })
                    console.log('Failed to post app state')
                }
            })
    }
}

export const getCurrentState = (userId) => {
    return dispatch => {
        dispatch({ type: 'LOADING' })
        fetch(API_URL + '/state', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(resp => resp.json())
            .then(json => {

                dispatch({ type: 'SET_VALUE', payload: json })
                    // if (json === 2) {
                    //   fetchUserActions(userId)
                    // }
            })
    }
}