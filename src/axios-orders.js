import axios from 'axios';

const instance =axios.create({
    baseURL: 'Your own firebaseio url'
});

export default instance;