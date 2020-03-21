import axios from 'axios';

const API_URI = 'https://5e7607da75012c00165e47eb.mockapi.io/api';

export default {
  POST(url, data, config) {
    return axios.post(`${API_URI}/${url}`, data, config);
  },
  GET(url, config) {
    return axios.get(`${API_URI}/${url}`, config);
  },
  PUT(url, data, config) {
    return axios.put(`${API_URI}/${url}`, data, config);
  },
  PATCH(url, data, config) {
    return axios.patch(`${API_URI}/${url}`, data, config);
  },
  DELETE(url, config) {
    return axios.delete(`${API_URI}/${url}`, config);
  },
};
