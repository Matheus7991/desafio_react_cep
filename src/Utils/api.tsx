import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'http://localhost:5173/',
});

export default myAxios;