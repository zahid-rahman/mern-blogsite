export const changeSiteName = (title) => {
    return {
        type: 'SITE_NAME',
        payload: title
    }
}

export const saveUserDetailsAfterLogin = (userDetails) => {
    return {
        type: 'SAVE_LOGGEDIN_USER_DETAILS',
        payload: userDetails
    }
}


export const fetchUserPosts = (userPosts) => {
    return {
        type: "FETCH_USER_POSTS",
        payload: userPosts
    }
}

export const fetchUserPost = (userPost) => {
    return {
        type: "FETCH_USER_POST",
        payload: userPost
    }
} 