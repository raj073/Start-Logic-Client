import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const details = useLoaderData();


    return (
        <div>

            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="2">

                    </Col>

                    <Col lg="8">

                        <h1>CheckOut Private Route: {details.title}</h1>

                    </Col>

                    <Col lg="2">

                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Checkout;