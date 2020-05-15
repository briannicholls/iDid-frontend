export default function (state = null, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      // debugger
      return action.payload

    default:
      return null
  }
}
