import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                        {/* <Nav.Link><Link to='/login'><Button variant=''>Login</Button></Link></Nav.Link>
                        <Nav.Link><Link to='/register'><Button variant=''>Register</Button></Link></Nav.Link> */}

                        {
                            user?.uid ?
                                <>

                                    <Nav.Link>
                                        <span>
                                            {
                                                user?.photoURL ?
                                                    <Image
                                                        style={{ height: '30px' }}
                                                        roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>
                                                    : <FaUserAlt></FaUserAlt>
                                            }
                                        </span>{' '}{' '}
                                        {user?.displayName}
                                    </Nav.Link>&nbsp;&nbsp;&nbsp;
                                    <Button onClick={handleSignOut} variant="outline-dark">Sign Out</Button>{' '}

                                </>
                                :
                                <>

                                    <Link to='/login'><Button variant="outline-dark">Login</Button></Link>&nbsp;&nbsp;&nbsp;
                                    <Link to='/register'><Button variant="outline-dark">Register</Button></Link>

                                </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;