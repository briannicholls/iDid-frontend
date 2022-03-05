import { API_URL } from '../Constants.js'

export const submitCredentials = (credentials) => {
    return dispatch => {
        dispatch({ type: 'LOADING' })
        const configObject = {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        }

        return fetch(API_URL + '/login', configObject)
            .then(resp => resp.json())
            .then(json => {
                if (json.error) {
                    dispatch({ type: 'ERROR', payload: json.error })
                } else {
                    dispatch({ type: 'SET_CURRENT_USER', payload: json })
                }
            })
            .catch(console.log)
    }
}