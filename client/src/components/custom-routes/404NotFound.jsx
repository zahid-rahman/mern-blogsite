import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div style={{margin:"10px"}}>
            <p>404 not found</p>
            <Link to="/">back to homepage</Link>
        </div>
    )
}

export default NotFound