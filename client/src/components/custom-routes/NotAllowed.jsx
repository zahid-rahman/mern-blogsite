import React from 'react'
import { Link } from 'react-router-dom'
const NotAllowed = () => {
    return (
        <div style={{margin:"10px"}}>
            <p>not allowed</p>
            <Link to="/">back to homepage</Link>
        </div>
    )
}

export default NotAllowed