import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { removeEverythindAfterLogout } from '../../utils/loginSession';

const DashboardNav = () => {
    const history = useHistory()


    const logoutHandler = () => {
        removeEverythindAfterLogout()
        history.push('/login')
    }

    return (
        <>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="btn btn-dark text-whtie" onClick={logoutHandler}> logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DashboardNav