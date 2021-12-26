import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.0.3:3000',
});

api.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    // console.log('Interceptor Error: ', error.response ? error.response : error);

    return Promise.reject(error);
  },
);

export default api;
