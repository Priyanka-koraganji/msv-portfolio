import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

export const NavBar = () => {
    return (
        <div className='nav__component'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container >
                    <Navbar.Brand href="#home" className='brand'>MVS Photography</Navbar.Brand>
                    <Nav className="me-auto right-links">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/work">Recent Work</Nav.Link>
                        <Nav.Link href="/event">Event</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}