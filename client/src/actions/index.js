export const changeSiteName = (title) => {
    return {
        type: 'SITE_NAME',
        payload: title
    }
}

export const saveUserDetailsAfterLogin = (userDetails) => {
    return {
        type: 'SAVE_LOGGEDIN_USER_DETAILS',
        payload : userDetails
    }
}