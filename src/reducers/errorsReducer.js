const initialState = {
  login: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN_ERROR':
      return {...state, login: action.payload}
    case 'CLEAR_LOGIN_ERROR':
      return {...state, login: null}
    default:
      return state
  }
}
