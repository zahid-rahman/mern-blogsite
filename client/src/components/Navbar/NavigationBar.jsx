import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Blog site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
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