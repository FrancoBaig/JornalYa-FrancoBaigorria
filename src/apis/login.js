import axios from 'axios';

const BASE_URL = 'https://sbox-dev.boxcustodia.com/api-test';

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
