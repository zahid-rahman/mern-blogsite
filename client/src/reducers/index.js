import siteTitle from "./siteTitleReducer"
import { combineReducers } from 'redux'
import {saveUserDetailsReducer as loggedUserDetails} from './userReducers'
import {fetchUserPostsReducer as userPosts} from './postReducers'
import {fetchUserPostReducer as userPost} from './postReducers'

const reducers = combineReducers({
    siteTitle,
    loggedUserDetails,
    userPosts,
    userPost
})

export default reducers