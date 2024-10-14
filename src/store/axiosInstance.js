import Axios from 'axios';

export const axiosInstance = Axios.create({
    baseURL: "https://www.**************.com",  
    headers: {
        'X-AUTH': `${localStorage.getItem('authToken')}`,  
        'WEBAPP': true,
        'Content-Type': 'application/json',
    }
});