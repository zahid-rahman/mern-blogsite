import siteTitle from "./siteTitleReducer"
import {saveUserDetailsReducer as loggedUserDetails} from './userReducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    siteTitle,
    loggedUserDetails
})

export default reducers