export default function(state = [], action) {
  switch (action.type) {
    case 'SET_USER_ACTIONS':
      return action.payload
    case 'ADD_ACTION':
      return [...state, action.payload]
    default:
      return state
  }
}
