import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../../utils/loginSession'

const AdminPublicRoute = ({ component: Component, ...rest }) => {
    const adminPublicRouteFunction = (props) => {
        return !getCookie() ? <Component {...props} /> :
            <Redirect to={{ pathname: '/admin/profile', state: { from: props.location } }} />
    }
    return (
        <Route {...rest} render={adminPublicRouteFunction} />
    )
}

export default AdminPublicRoute