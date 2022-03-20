export default function(state = [], action) {
  switch (action.type) {
    case 'SET_USER_ACTIONS':
      return { ...state, 
        [action.payload.user_id]: action.payload.actions
      }
    case 'ADD_ACTION':
      return [...state, action.payload]
    default:
      return state
  }
}
