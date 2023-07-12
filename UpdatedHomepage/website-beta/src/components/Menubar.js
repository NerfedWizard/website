import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Menubar() {
    return (
        <Navbar className="navbar-custom" expand="sm" sticky="top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Loel Nelson</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Menu" className="menufont">
                            <NavDropdown.Item href="quotes">Quotes</NavDropdown.Item>
                            <NavDropdown.Item href="resume">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="email">Contact  Me</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar