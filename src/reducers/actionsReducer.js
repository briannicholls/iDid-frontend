export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_ACTIONS':
      
      state.concat(action.payload)
      break;
    default:
      return state
  }
}
