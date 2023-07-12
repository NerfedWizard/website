import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Menubar() {
    return (
        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Loel Nelson</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="resume">Resume</Nav.Link>
                        <Nav.Link href="quotes">Quotes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar