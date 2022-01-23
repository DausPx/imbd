import axios from 'axios';

export const api_key = 'k_l14ic6pq';

const api = axios.create({
  baseURL: `https://imdb-api.com/en/API`,
});

export default api;
