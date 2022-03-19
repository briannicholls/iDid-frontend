import axios from 'axios';
let apiUrl = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: apiUrl,
  // headers: {
  //   'Access-Control-Allow-Origin':  '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   'Accept':        '*/*',
  //   'Cache-Control': 'no-store'
  // }
});