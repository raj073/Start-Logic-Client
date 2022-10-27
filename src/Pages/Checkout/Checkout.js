import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaDollarSign } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Checkout = () => {

    const course = useLoaderData();
    const { id, title, details, img_url, ratings, course_name, course_id, author, author_img_url, assessments, lession, duration, student, level, price } = course;

    const handleConfirmCourse = () => {
        toast.success('Congratulations! You Have Successfully Enrolled the Course.', {
            position: "top-right"
        });
    }

    return (
        <div>

            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="4">

                    </Col>

                    <Col lg="4">

                        <div className="col">
                            <div className="card h-100 rounded border-0 bg-dark">
                                <img src={img_url} className="card-img-top" alt="Session_image" />
                                <div className="card-body bg-dark">
                                    <h5 className="card-title fw-bold text-white text-center">
                                        {title}</h5>
                                    <p class="card-text text-white-50 fs-6 text-center">
                                        Price: <FaDollarSign></FaDollarSign> {price}
                                    </p>
                                </div>

                                <button onClick={handleConfirmCourse} className="btn btn-block btn-primary border-0 fw-semibold rounded-0 mx-4 mb-3">
                                    CONFIRM COURSE</button>
                            </div>
                        </div>

                    </Col>

                    <Col lg="4">

                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Checkout;