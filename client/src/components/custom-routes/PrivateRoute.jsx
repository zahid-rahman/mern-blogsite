import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie, getUserDetails } from '../../utils/loginSession'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const adminDetails = getUserDetails();
    const isCookie = getCookie() ? true : false
    const privateRouteFunction = (props) => {
        if(adminDetails != null && adminDetails.userType === 'blogger') {
            if(isCookie) {
                return <Component {...props} />
            }
        }
        else {
            return <Redirect to={{ pathname: '/unauthorize', state: { from: props.location } }} />
        }    
    }
    return (
        <Route {...rest} render={privateRouteFunction} />
    );
}

export default memo(PrivateRoute);
