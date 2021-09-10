import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie, getUserDetails } from '../../utils/loginSession'

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    const adminDetails = getUserDetails();
    const adminPrivateRouteFunction = (props) => {
        if(adminDetails != null) {
            return getCookie() && adminDetails.userType === 'admin' ? <Component {...props} /> :
            <Redirect to={{ pathname: '/authentication/login', state: { from: props.location } }} />
        }
        else {
            return <Redirect to={{ pathname: '/authentication/login', state: { from: props.location } }} />
        }
        
    }
    return (
        <Route {...rest} render={adminPrivateRouteFunction} />
    );
}

export default AdminPrivateRoute
