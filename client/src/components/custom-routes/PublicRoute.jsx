import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../../utils/loginSession'

const PublicRoute = ({ component: Component, ...rest }) => {
    const publicRouteFunction = (props) => {
        return !getCookie() ? <Component {...props} /> :
            <Redirect to={{ pathname: '/user/profile', state: { from: props.location } }} />
    }
    return (
        <Route {...rest} render={publicRouteFunction} />
    )
}

export default PublicRoute