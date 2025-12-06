export const BASE_URL='http://localhost:8080/api/v1';


//LOGIN USER
export const LOGIN_URL='/auth/login';

export const OAUTH_GOOGLE_LOGIN_URL='/oauth/login/google'

export const OAUTH_GOOGLE_CODE=(code)=>`/oauth/login/code/google?code=${code}`



//REGISTER USER
export const REGISTER_URL='/auth/register'


//OTP
export const VALIDATE_OTP_URL='/auth/validate-otp'


//RESET PASSWORD
export const RESET_PASSWORD_REQUEST_URL=(email)=>`/auth/forgot-password?email=${email}`

export const RESET_PASSWORD_URL='/auth/change-password';