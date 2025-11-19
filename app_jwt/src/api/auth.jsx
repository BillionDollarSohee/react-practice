import axios from 'axios';

const API = axios.create(
  {
    baseURL:'http://localhost:8090',
    withCredentials:true, // jwt 토큰을 쿠키에 담아서 전송하게 허락
  }
);

API.interceptors.request.use( (config) => {
    const token = localStorage.getItem('token');
    console.log("전송할 토큰 : " + token);

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
});

export const login= (data) => API.post('/login', data);
export const register = (data) => API.post('/register', data);
export const getUserInfo = () => API.get('/user/info');

/*
인터셉터가 요청을 가로채는데 API.post('/login')
가로챌 컴포넌트가 필요하다.
*/