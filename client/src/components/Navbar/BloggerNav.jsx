import React from 'react'
import {  NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { removeEverythindAfterLogout } from '../../utils/loginSession';

const BloggerNav = ({ userDetails }) => {
    const history = useHistory()
    const logoutHandler = () => {
        removeEverythindAfterLogout()
        history.push('/login')
    }
    return (
        <NavDropdown title={userDetails.username} id="basic-nav-dropdown">
            <Link to="/user/profile" className="dropdown-item">View profile</Link>
            <Link to="/post/create" className="dropdown-item">Create post</Link>
            <Link to="/" className="dropdown-item">View all posts</Link>
            <Link onClick={logoutHandler} className="dropdown-item"> logout</Link>
        </NavDropdown>
    )
}

export default BloggerNav;