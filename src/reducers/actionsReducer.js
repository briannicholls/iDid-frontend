export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_ACTIONS':
      return state.concat(action.payload)
      break;
    default:
      return state
  }
}
