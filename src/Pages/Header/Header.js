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
import Icon from '../../assets/images/distance-learning.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import toast from 'react-hot-toast';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
                toast.success('User Successfully Logout', {
                    position: "top-right"
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow mb-5'>
            <Container>
                <Navbar.Brand>
                    <Image
                        style={{ height: '60px' }}
                        roundedCircle
                        src={Icon}>
                    </Image> &nbsp;&nbsp;
                    <Button className='fs-4' variant="primary" size="sm">
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
                        <Nav.Link>
                            <BootstrapSwitchButton checked={true} width={100} onlabel='Light' offlabel='Dark' onstyle="light" offstyle="dark" />
                        </Nav.Link>
                    </Nav>

                    <Nav>


                        {
                            user?.uid ?
                                <>
                                    <Nav.Link>

                                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{user?.displayName}</Tooltip>}>
                                            <span className="d-inline-block">
                                                {
                                                    user?.photoURL ?
                                                        <Image
                                                            style={{ height: '40px' }}
                                                            roundedCircle
                                                            src={user?.photoURL}>
                                                        </Image>
                                                        : <FaUserAlt></FaUserAlt>
                                                }
                                            </span>
                                        </OverlayTrigger>

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