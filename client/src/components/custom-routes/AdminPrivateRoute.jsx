import React, { memo, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie, getUserDetails } from '../../utils/loginSession'

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    const adminDetails = getUserDetails();
    const isCookie = getCookie() ? true : false
    const adminPrivateRouteFunction = (props) => {
        if(adminDetails != null && adminDetails.userType === 'admin') {
            if(isCookie) {
                return <Component {...props} />
            }
        }
        else {
            return <Redirect to={{ pathname: '/unauthorize', state: { from: props.location } }} />
        }
        
    }

    return (
        <Route {...rest} render={adminPrivateRouteFunction} />
    );
}

export default memo(AdminPrivateRoute);
