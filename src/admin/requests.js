import axios from "axios";
import { getToken, setAuthInHeaders, setToken } from "./helpers/token";
//с вебинара
const token = getToken();
// const token = localStorage.getItem("token");

if (!token) console.warn("Отсутствует токен");

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

requests.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const response = await requests.post("/refreshToken");
      const token = response.data.token;

      // localStorage.setItem("token", token);
      setToken(token);
      // requests.defaults.headers["Authorization"] = `Bearer ${token}`;
      setAuthInHeaders(requests, token);
      originalRequest.headers["Authorization"] = `Bearer ${token}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default requests;



//с созвона
// axios.defaults.baseURL = "http://localhost:8000/admin";
// axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
// const token = getToken();
// if (token) setAuthHttpHeaderToAxios(axios, token);

// axios.interseptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     const originalRequest = error.config;
//     if(error.response.status === 401) {
//       return axios.post("/refreshToken").then(response => {
//         const token = response.data.token;
//         setToken(token);
//         setAuthHttpHeaderToAxios(axios, token);
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;
//         return axios(originalRequest);
//       });
//     }
//     return Promise.reject(error);
//   }
// );
// export default axios;
