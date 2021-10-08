const siteTitleReducer = (state = [], action) => {
    switch (action.type) {
        case 'SITE_NAME':
            return state = action.payload

        default:
            return state;
    }
}

export default siteTitleReducer