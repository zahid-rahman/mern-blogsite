import cookie from 'js-cookie'
import decode from 'jwt-decode'

const { REACT_APP_COOKIE_STRING } = process.env

export const setCookie = (token) => {
    cookie.set(REACT_APP_COOKIE_STRING, token)
}

export const getCookie = () => {
    console.log(cookie.get(REACT_APP_COOKIE_STRING))
    return cookie.get(REACT_APP_COOKIE_STRING);
}

export const removeCookie = () => {
    cookie.remove(REACT_APP_COOKIE_STRING)
}

export const getToken = () => {
    if(getCookie()) {
        const data = JSON.parse(getCookie());
        const token = data.accessToken;
        return token;
    }
}

export const setUserDetails = () => {
    console.log(getCookie())
    if(getCookie()) {
        const token = getToken();
        const decodeUserData = decode(token);
        cookie.set('USER_DATA',JSON.stringify(decodeUserData))
    }
}


export const getUserDetails = () => {
    if(getCookie()) {        
        const userDataCookie = cookie.get('USER_DATA')
        if(userDataCookie) {
            const userData = JSON.parse(userDataCookie);
            return userData
        }
    } 
}

export const removeUserDetails = () => {
    cookie.remove('USER_DATA');
}

export const removeEverythindAfterLogout = () => {
    removeCookie();
    removeUserDetails();
    window.location.href = "/login";
}