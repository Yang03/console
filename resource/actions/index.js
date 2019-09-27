export const AUTH_SESSION = 'AUTH_SESSION'

/*-------------------- */
export const LOGIN_REQUEST = 'LOGIN_REQUEST'


export function loginRequest (data) {
    return {type: LOGIN_REQUEST, data}
  }