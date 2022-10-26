import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Course from '../Course/Course';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);

    return (
        <div>

            <Container className='shadow p-5 rounded'>

                <Row className="justify-content-md-center">

                    <Col lg="3">
                        <ListGroup className='mb-4'>
                            <ListGroup.Item className='text-center fw-bold' variant="info">
                                All Couses: {courses.length}
                            </ListGroup.Item>
                        </ListGroup>
                        {
                            courses.map(category => <ListGroup key={category.id}>


                                <Button className='mb-2 fs-6' variant="outline-info" size="sm">
                                    <Link style={{ textDecoration: 'none' }}>{category.course_name}</Link>
                                </Button>
                            </ListGroup>)
                        }
                    </Col>

                    <Col lg="9">

                        <div className='ms-3 row row-cols-lg-3 row-cols-md-2 row-cols-1 py-3 gy-3'>

                            {
                                courses.map(course => <Course
                                    key={course._id}
                                    courseDetails={course}
                                ></Course>)
                            }

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Courses;