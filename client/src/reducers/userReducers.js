export const saveUserDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_LOGGEDIN_USER_DETAILS':
            return state = action.payload
        default:
            return state;
    }
}