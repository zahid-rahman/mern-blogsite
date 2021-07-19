import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                
                <Navbar.Brand href="/">Blog site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className="nav-link">Home</Link>
                        <Link to='/about' className="nav-link">About </Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="zahid rahman" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">View profile</NavDropdown.Item>
                        <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavigationBar;