import fetchApi from '../api/fetchApi'
// import history from '../history';
import { createBrowserHistory } from 'history';
import {toastr} from 'react-redux-toastr';
import { css } from 'glamor';

const history = createBrowserHistory

fetchApi.interceptors.response.use( response => {
    return response;
  }, (error) => {
    switch (error.response.status) {
      case 400:
        toastr.error('Error: 400', 'Bad Request', {
          className: css({ background: "red !important"})
        })
        history.goBack();
        //pop up and go back
        break;
      case 401:
        if (error.response.data.error_code && error.response.data.error_code === 'not_active') {
          toastr.error('Error', 'Your account is not active', {
            className: css({ background: "red !important"})
          })
        } else if(error.response.data.error_code && error.response.data.error_code === 'token_required'){
          console.log("token required")
        }
        else {
          toastr.error('Error', 'You must be signed in', {
            className: css({ background: "red !important"})
          })
        } 
        history.push('/sign_in');
        //redirect to sign in - maybe log out?
        break;
      case 403:
        console.log(error.response)
        toastr.error('Error: 403', 'Forbidden: ' + error.response.data.errors[0].message, {
          className: css({ background: "red !important"})
        })
        history.goBack();
        //go back and give pop up
        break;
      case 422:
          console.log('422 Unprocessable Entity');
          toastr.error('Error', 'Unable to process request', {
            className: css({ background: "red !important"})
          })
        //give pop up
        break;
      case 404:
        console.log('404 not found');
        //redirect to 404 page
        history.push('/not_found_page');
        break;
      case 500:
        toastr.error('Error: 500', 'Internal Server Error', {
          className: css({ background: "red !important"})
        })
        //pop up and go back
        break;
      default:
        console.log("default");
        break;
    }
  return Promise.reject(error);
  })

export const loginSubmit = credentials => async dispatch => {
    await fetchApi.post('/login', credentials, {withCredentials: true})
    .then(response => {
        dispatch({type: 'SET_CURRENT_USER', payload: response.data})
    })
}