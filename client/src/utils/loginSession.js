import cookie from 'js-cookie'
import decode from 'jwt-decode'

const { REACT_APP_COOKIE_STRING } = process.env


export const setCookie = (token) => {
    cookie.set(REACT_APP_COOKIE_STRING, token)
}

export const getCookie = () => {
    return cookie.get(REACT_APP_COOKIE_STRING) || null;
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
    return null;
}

export const setUserDetails = () => {
    if(getCookie()) {
        const token = getToken();
        const decodeUserData = decode(token);
        cookie.set('USER_DATA',decodeUserData)
        console.log('finished   ')
    }
    return;
}


export const getUserDetails = () => {
    if(getCookie()) {
        const userData = JSON.parse(cookie.get('USER_DATA'));
        console.log(userData)
        return userData
    } 
    return null;
}

export const removeUserDetails = () => {
    cookie.remove('USER_DATA')
}

export const removeEverythindAfterLogout = () => {
    removeCookie()
    removeUserDetails()
}