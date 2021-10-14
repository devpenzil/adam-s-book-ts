import {AUTH_BASE_URL} from '../constants/constants'
import axios from 'axios';

// * Axios instance for authentication

 const authinstance = axios.create({
    baseURL: AUTH_BASE_URL
  });

export default authinstance

