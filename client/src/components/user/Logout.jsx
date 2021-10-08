import React from 'react'
import { removeCookie } from '../../utils/loginSession'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    const logoutHandler = () => {
        removeCookie()
        history.push('/login')
    }

    return (
        <button onClick={logoutHandler} className="btn btn-danger">logout</button>
    )
}

export default Logout
