import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div>

            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col sm={6} md={7} lg={8} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center"><span className='text-uppercase'>Register</span> <br /> Now to Explore More</h2>
                                    <p className=" mb-4 fs-3 text-uppercase text-center">Distance Learning</p>
                                    <div>
                                        <Form>

                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label className="text-center">
                                                    Your Name
                                                </Form.Label>
                                                <Form.Control name='name' type="text" placeholder="Your Name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicphotoURL">
                                                <Form.Label className="text-center">
                                                    Your Photo URL
                                                </Form.Label>
                                                <Form.Control name='photoURL' type="text" placeholder="Your Photo URL" />
                                            </Form.Group>

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
                                                    REGISTER
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Don't have an account? &nbsp;&nbsp;
                                                <Link className='text-primary fw-bold' to='/login'>Sign In</Link>
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

export default Register;