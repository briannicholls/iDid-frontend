export default function(state = [], action) {
  switch (action.type) {
    case 'SET_USER_ACTIONS':
      return action.payload
      break;
    default:
      return state
  }
}
