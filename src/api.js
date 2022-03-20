import axios from 'axios';
import { API_URL } from './Constants';

export default axios.create({
  baseURL: API_URL,
  // headers: {
  //   'Access-Control-Allow-Origin':  '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //   'Accept':        '*/*',
  //   'Cache-Control': 'no-store'
  // }
});