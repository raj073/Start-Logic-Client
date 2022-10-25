import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow mb-5'>
            <Container>
                <Navbar.Brand>
                    <Button className='fs-4' variant="primary">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Distance Learning</Link>
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>

                    <Nav className="justify-content-center" style={{ flex: 1 }}>
                        <Nav.Link><Link to='/courses'><Button variant=''>Courses</Button></Link></Nav.Link>
                        <Nav.Link><Link to='/blog'><Button variant=''>Blog</Button></Link></Nav.Link>
                        <Nav.Link><Link to="/faq"><Button variant=''>FAQ</Button></Link></Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link><Link to='/login'><Button variant=''>Login</Button></Link></Nav.Link>
                        <Nav.Link><Link to='/register'><Button variant=''>register</Button></Link></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;