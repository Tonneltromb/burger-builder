import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-ymatin.firebaseio.com/"
});

export default instance;