import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveUserDetailsAfterLogin } from '../../actions'
import { getUserDetails } from '../../utils/loginSession'

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const userDetails = getUserDetails()
        dispatch(saveUserDetailsAfterLogin(userDetails))
    }, [])

    return (
        <div>
            <h1>User Profile</h1>
            <Link to="/">home page</Link>
        </div>
    )
}

export default ProfilePage
