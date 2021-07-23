import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserDetails } from '../../utils/loginSession'

const ProfilePage = () => {
    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <div>
            <h1>User Profile</h1>
            <Link to="/">home page</Link>
        </div>
    )
}

export default ProfilePage
