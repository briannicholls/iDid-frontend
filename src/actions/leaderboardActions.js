import {API} from '../Constants.js'

export function fetchLeadersAllTime(callback) {
  return fetch(`${API}/leaders`)
    .then(resp => resp.json())
    .then(json => {
      callback(json)            
    })
    .catch([''])
}
