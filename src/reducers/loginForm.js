export default function (
  state = {
    email: '',
    password: '',
    requesting: false,
    error: ''
  },
  action
) {
  switch (action.type) {

    case 'LOADING':
      return {...state, requesting: true}

    case 'ERROR':
      return {...state, error: action.payload, requesting: false}

    default:
      return {...state, requesting: false}
  }
}
