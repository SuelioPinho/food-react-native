import axios from "axios";
import { BASE_URL, API_KEY } from '@env';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer ' + API_KEY
    }
});