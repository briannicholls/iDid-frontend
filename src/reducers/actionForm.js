export default function (state = {
  name: '',
  reps: ''
}, action) {
  switch (action.type) {
    case 'UPDATE_ACTION_FORM':
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      }
    default:
      return state
  }
}
