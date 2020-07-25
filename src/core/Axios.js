import axios from 'axios';

import { API_URL } from './Configs';

const Axios = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export default Axios;
