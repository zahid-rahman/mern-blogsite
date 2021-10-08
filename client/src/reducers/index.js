import siteTitle from "./siteTitleReducer"
import { combineReducers } from 'redux'
import {saveUserDetailsReducer as loggedUserDetails} from './userReducers'
import {fetchUserPostsReducer as userPosts} from './postReducers'

const reducers = combineReducers({
    siteTitle,
    loggedUserDetails,
    userPosts
})

export default reducers