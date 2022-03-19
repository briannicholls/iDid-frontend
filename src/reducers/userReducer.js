export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      const user = action.payload
      return {
        ...state,
        [user.id]: user
      }
    default:
      return state
  }
}
