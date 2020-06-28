import axios from 'axios';

import { API_URL } from './Configs';

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Header': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
  },
});

export default Axios;
