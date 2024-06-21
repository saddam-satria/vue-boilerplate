import { API_URL } from '@/utils/constant';
import axios from 'axios';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});
