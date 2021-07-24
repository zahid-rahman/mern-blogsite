import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { Link, useHistory } from 'react-router-dom';
import { getCookie, removeEverythindAfterLogout } from '../../utils/loginSession';

const NavigationBar = () => {

    const loggedUserDetails = useSelector(state => state.loggedUserDetails)
    const siteTitle = useSelector(state => state.siteTitle)
    const cookie = getCookie()
    const history = useHistory()

    const logoutHandler = () => {
        removeEverythindAfterLogout()
        history.push('/login')
    }


    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Link to="/" className="navbar-brand">{siteTitle}</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className="nav-link">Home</Link>
                        <Link to='/about' className="nav-link">About </Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">

                    {cookie ?
                        <NavDropdown title={loggedUserDetails.username} id="basic-nav-dropdown">
                            <Link to="/post/create" className="dropdown-item">Create post</Link>
                            <Link to="/" className="dropdown-item">View all posts</Link>
                            <Link to="/user/profile" className="dropdown-item">View profile</Link>
                            <Link onClick={logoutHandler} className="dropdown-item"> logout</Link>
                        </NavDropdown>

                        :
                        <Nav>
                            <Link to='/signup' className="nav-link">Sign Up</Link>
                            <Link to='/login' className="nav-link">Login</Link>
                        </Nav>

                    }

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavigationBar;