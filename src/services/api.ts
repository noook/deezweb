import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/http://api.deezer.com';

const instance = axios.create({
  baseURL,
});

export default instance;
