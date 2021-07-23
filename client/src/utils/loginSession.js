import cookie from 'js-cookie'
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
