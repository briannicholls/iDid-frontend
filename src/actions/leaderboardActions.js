import { API_URL } from '../Constants.js'

// export function fetchLeadersAllTime(callback) {
//   return fetch(`${API_URL}/leaders`)
//     .then(resp => resp.json())
//     .then(json => {
//       callback(json)
//     })
//     .catch([''])
// }

export function fetchMonthLeaders(hookCallback) {
    return fetch(`${API_URL}/leaders?q=month`)
        .then(resp => resp.json())
        .then(json => hookCallback(json))
}

export function fetchWeekLeaders(hookCallback) {
    return fetch(`${API_URL}/leaders?q=week`)
        .then(resp => resp.json())
        .then(json => hookCallback(json))
}

export function fetchAllLeaders(hookCallback) {
    return fetch(`${API_URL}/leaders`)
        .then(resp => resp.json())
        .then(json => hookCallback(json))
}