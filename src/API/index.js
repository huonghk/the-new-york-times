import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.nytimes.com/svc/search/v2',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default API;
