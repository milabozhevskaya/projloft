import axios from "axios";
import { getToken, setAuthHttpHeaderToAxios, setToken } from "./helpers/token";
//с вебинара
const token = localStorage.getItem("token") || "";

if (!token) console.warn("Отсутствует токен");

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});
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
