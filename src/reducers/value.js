export default function(state = {value: 0}, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {value: action.payload}
    default:
      return state
  }
}
