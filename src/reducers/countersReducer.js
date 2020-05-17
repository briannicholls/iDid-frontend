export default function(state = [], action) {
  switch (action.type) {
    case 'SET_COUNTERS':
      return action.payload
    default:
      return state
  }
}
