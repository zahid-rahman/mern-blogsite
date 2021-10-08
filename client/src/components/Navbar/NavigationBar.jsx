import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../../utils/loginSession';
import AdminNav from './AdminNav';
import BloggerNav from './BloggerNav';

const NavigationBar = () => {
    const loggedUserDetails = useSelector(state => state.loggedUserDetails)
    const siteTitle = useSelector(state => state.siteTitle)
    const cookie = getCookie()
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
                        loggedUserDetails.userType == "blogger" ? <BloggerNav userDetails={loggedUserDetails} /> : <AdminNav userDetails={loggedUserDetails} />
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