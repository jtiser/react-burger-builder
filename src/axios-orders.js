import axios from 'axios';
import * as constants from './const.js';

const instance = axios.create({
    baseURL: constants.FIREBASE_BASE_URL
});

export default instance;