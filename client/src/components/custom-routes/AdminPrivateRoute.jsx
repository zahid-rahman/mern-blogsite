import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../../utils/loginSession'

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    const adminPrivateRouteFunction = (props) => {
        return getCookie() ? <Component {...props} /> :
            <Redirect to={{ pathname: '/authentication/login', state: { from: props.location } }} />
    }
    return (
        <Route {...rest} render={adminPrivateRouteFunction} />
    )
}

export default AdminPrivateRoute
