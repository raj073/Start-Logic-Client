import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

    return (
        <div>

            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col sm={6} md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                                        Sign In <br /> <span>Welcome</span> </h2>
                                    <p className=" mb-4 fs-3 text-uppercase text-center">Distance Learning</p>
                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Your Email
                                                </Form.Label>
                                                <Form.Control name='email' type="email" placeholder="Your Email" required />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Your Password</Form.Label>
                                                <Form.Control name='password' type="password" placeholder="Your Password" required />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                <div>
                                                    <Form.Text className="text-danger p-2 fw-bold shadow-lg rounded">

                                                    </Form.Text>
                                                </div>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button className='fw-bold' variant="primary" type="submit">
                                                    LOGIN
                                                </Button>
                                            </div>
                                            <div class="divider">
                                                <span></span><span>OR</span><span></span>
                                            </div>
                                            <div className="d-grid">
                                                <Button className='fw-semibold' variant="outline-primary" type="submit">
                                                    <FaGoogle></FaGoogle> &nbsp; SIGN IN WITH GOOGLE
                                                </Button>
                                            </div>
                                            <div class="divider">
                                                <span></span><span>OR</span><span></span>
                                            </div>
                                            <div className="d-grid">
                                                <Button className='fw-semibold' variant="outline-primary" type="submit">
                                                    <FaGithub></FaGithub> &nbsp; SIGN IN WITH GITHUB
                                                </Button>
                                            </div>
                                        </Form>


                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account? &nbsp;&nbsp;
                                                <Link className='text-primary fw-bold' to='/register'>Register</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;