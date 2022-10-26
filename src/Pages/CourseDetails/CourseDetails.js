import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaFilePdf, FaStar } from "react-icons/fa";
import { Col, Container, Row, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { title, details, img_url, ratings, course_id, author, author_img_url, assessments, lession } = courseDetails;

    return (

        <div>

            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="2">

                    </Col>

                    <Col lg="8">

                        <Card className="">
                            <Card.Img variant="top" src={img_url} />
                            <Card.Body>
                                <Card.Title>Course Tiltle: {title}</Card.Title>
                                <div className="d-flex justify-content-evenly mb-3 mt-4">
                                    <div className="shadow p-2 rounded">
                                        <Image roundedCircle className='me-2'
                                            src={author_img_url}
                                            style={{ height: '40px' }}
                                        ></Image>
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <b><i>Author:</i></b> {author}
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <b><i>Assessments:</i></b> {assessments}
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <b><i>Lessions:</i></b> {lession}
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <FaStar className='text-warning me-2'></FaStar>
                                        <span><b><i>{ratings}</i></b></span>
                                    </div>
                                </div>
                                <Card.Text className="text-justify">
                                    <b><i>Course Details:</i></b> {details}
                                </Card.Text>
                                <Link>
                                    <Button variant="outline-primary">
                                        <FaFilePdf></FaFilePdf>  DownLoad PDF
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col lg="2">

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default CourseDetails;