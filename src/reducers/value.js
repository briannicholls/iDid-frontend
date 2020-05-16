export default function(state = 0, action) {
  switch (action.type) {
    case 'SET_VALUE':
      if (action.payload >= 0) {
        return action.payload
      } else {
        return state
      }
    default:
      return state
  }
}
