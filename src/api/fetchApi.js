import axios from 'axios';

import { API, REQUEST_ORIGIN } from '../Constants'

// const token = process.env.REACT_APP_PORTAL_TOKEN;
// if (typeof token === "undefined") {
//   //default admin token for development
//   token="45ff8f7bc1342233fe604af8ea84ce471ef4c57db2c91d791346bdbb67adf64c";
// }

export default axios.create({
  baseURL: API,
  credentials: 'include',
  headers: {
    // 'X-TOKEN' : token ,
    // 'x-apikey': '59a7ad19f5a9fa0808f11931',
    'Access-Control-Allow-Origin' : REQUEST_ORIGIN,
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Accept': 'application/json',
    // 'X-Admin-Token': sessionStorage.admin_token,
    // 'X-Admin-Email': sessionStorage.email
  }
});
