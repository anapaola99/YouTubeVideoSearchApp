import axios from 'axios';
const KEY = 'AIzaSyDfT_DdOhbG6DjssyEN-PQ4QexYLlLD8AA'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})