import axios from 'axios';

const configOMB = {
  baseURL: 'http://www.omdbapi.com',

};
const key = '995f97b1';
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance.get(`/?apikey=${key}&s=${title}`);
  },
  searchFilmsByType: (title: string, type: string) => {
  }
};


export default API;
