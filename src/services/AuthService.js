import axios from "axios";
import { BASE_URL, LOGIN_URL, OAUTH_GOOGLE_CODE, OAUTH_GOOGLE_LOGIN_URL, REGISTER_URL, RESET_PASSWORD_URL, VALIDATE_OTP_URL } from "./routes";


const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your API base URL
  });


export const login=(data)=>{
    return axiosInstance.post(LOGIN_URL,data)
}

export  const loginGoogle=()=>{
    return   axiosInstance.get(OAUTH_GOOGLE_LOGIN_URL)
}

export const loginGoogleCode=(code)=>{
    return   axiosInstance.post(OAUTH_GOOGLE_CODE(code))
}
export const registerUser=(data)=>{
    return   axiosInstance.post(REGISTER_URL,data)
}

export const validateOtp=(data)=> {
    return   axiosInstance.post(VALIDATE_OTP_URL,data)

}

export const resetPasswordRequest=(data)=>{
    return   axiosInstance.get(RESET_PASSWORD_REQUEST_URL(data.email))
}

export const resetPassword=(data)=>{
    return axiosInstance.post(RESET_PASSWORD_URL,data);
}

