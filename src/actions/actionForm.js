export const updateActionForm = event => {
  return dispatch => {
    dispatch({type: 'UPDATE_ACTION_FORM', payload: event})
  }
}
