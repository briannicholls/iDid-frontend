import {API} from '../Constants.js'

// export function fetchLeadersAllTime(callback) {
//   return fetch(`${API}/leaders`)
//     .then(resp => resp.json())
//     .then(json => {
//       callback(json)
//     })
//     .catch([''])
// }

export function fetchMonthLeaders(hookCallback) {
  return fetch(`${API}/leaders?q=month`)
    .then(resp => resp.json())
    .then(json => hookCallback(json))
}

export function fetchWeekLeaders(hookCallback) {
  return fetch(`${API}/leaders?q=week`)
    .then(resp => resp.json())
    .then(json => hookCallback(json))
}

export function fetchAllLeaders(hookCallback) {
  return fetch(`${API}/leaders`)
    .then(resp => resp.json())
    .then(json => hookCallback(json))
}
