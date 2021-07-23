import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookie } from '../../utils/loginSession'

const PublicRoute = ({ component: Component, ...rest }) => {

    const privateRouteFunction = (props) => {
        return !getCookie() ? <Component {...props} /> :
            <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
    }

    return (
        <Route {...rest} render={privateRouteFunction} />
    )
}

export default PublicRoute