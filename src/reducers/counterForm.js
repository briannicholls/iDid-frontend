export default function (state = {
  name: '',
  weighted: false,
  timed: false
}, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER_FORM':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    default:
      return state
  }
}
