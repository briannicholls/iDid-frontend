//export const BASE_URL = 'http://localhost:3001'
// export const API_URL = 'http://localhost:3001/api/v1'
// export const API_URL = 'https://idid-app.herokuapp.com/api/v1'
// export const REQUEST_ORIGIN = 'https://idid.netlify.app/'

export const API_URL = process.env.REACT_APP_API_URL
export const REQUEST_ORIGIN = process.env.REACT_APP_REQUEST_ORIGIN

// console.log('process.env', process.env)
// console.log('REACT_APP_API_URL', process.env.REACT_APP_API_URL)
// console.log('REACT_APP_REQUEST_ORIGIN', process.env.REACT_APP_REQUEST_ORIGIN)