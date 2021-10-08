import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { removeEverythindAfterLogout } from '../../utils/loginSession';

const AdminNav = ({ userDetails }) => {
    const logoutHandler = () => {
        removeEverythindAfterLogout();
        window.location.href = '/'
    }
    return (
        <NavDropdown title={userDetails.username} id="basic-nav-dropdown">
            <Link to="/admin/profile" className="dropdown-item">View profile</Link>
            <Link onClick={logoutHandler} className="dropdown-item"> logout</Link>
        </NavDropdown>
    )
}

export default AdminNav;