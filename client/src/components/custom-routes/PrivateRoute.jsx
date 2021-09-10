import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie, getUserDetails } from '../../utils/loginSession'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const bloggerDetails = getUserDetails();
    const privateRouteFunction = (props) => {
        if(bloggerDetails != null) {
            return getCookie() && bloggerDetails.userType === 'blogger' ? <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        else {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
    }
    return (
        <Route {...rest} render={privateRouteFunction} />
    )
}

export default PrivateRoute
