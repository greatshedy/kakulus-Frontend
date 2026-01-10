import axios from "axios";


const BACKEND_URL=import.meta.env.VITE_BACKEND_URL

export const api =axios.create({
  baseURL: BACKEND_URL,
  withCredentials:true,
});




api.interceptors.request.use(
  
  (config) => {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    console.log("Request Config:", config);

    const token = localStorage.getItem("token");
    if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }


    return config;

  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    if (response?.data?.status === "success") {
        localStorage.setItem("kyc_data_update", true);
        localStorage.setItem("kyc_user_id", response.data.userId);
    }else{
        localStorage.setItem("kyc_data_update", false);
        localStorage.removeItem("kyc_user_id");
    }
    return response;
  }
    ,   
    (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
    }
);





// api.interceptors.response.use(
//   (response) => {
//     const authEndpoints = ["/login", "/admin_dashboard"];

//     if (authEndpoints.some(url => response.config.url.includes(url))) {
//       if (response.status === 200) {
//         localStorage.setItem("kyc_data_update", "true");
//       } else {
//         localStorage.setItem("kyc_data_update", "false");
//       }
//     }

//     return response;
//   },
//   (error) => {
//     console.error("API Error:", error.response || error.message);
//     return Promise.reject(error);
//   }
// );
