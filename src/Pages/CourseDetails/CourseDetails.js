import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaFilePdf, FaStar, FaRegArrowAltCircleRight, FaDollarSign } from "react-icons/fa";
import { Col, Container, Row, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Pdf from "react-to-pdf";

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    const { _id, title, details, img_url, ratings, course_name, course_id, author, author_img_url, assessments, lession, duration, student, level, price } = courseDetails;

    const ref = React.createRef();

    return (

        <div>



            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="2">

                    </Col>

                    <Col lg="8">

                        <Card className="">
                            <Card.Header className='d-flex justify-content-between align-items-center mb-2'>
                                <div className='d-flex'>
                                    <b><i>Course Category: {course_name}</i></b>
                                </div>
                                <div>
                                    <Link>

                                        <Pdf targetRef={ref} filename="document.pdf">
                                            {({ toPdf }) => <Button onClick={toPdf} className='rounded-0' variant="outline-primary">
                                                <FaFilePdf></FaFilePdf>  DownLoad PDF
                                            </Button>}
                                        </Pdf>
                                        {/* <div ref={ref}>
                                            <h1>React to pdf</h1>
                                        </div> */}
                                    </Link>
                                </div>

                            </Card.Header>
                            <Card.Img variant="top" src={img_url} />
                            <Card.Body ref={ref}>
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

                                </div>
                                <div className="d-flex justify-content-evenly mb-3 mt-4">
                                    <div className="shadow p-2 rounded">
                                        <b><i>Duration:</i></b> {duration}
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <b><i>Total Student:</i></b> {student}
                                    </div>
                                    <div className="shadow p-2 rounded">
                                        <b><i>Level:</i></b> {level}
                                    </div>

                                </div>
                                <Card.Text className="text-justify">
                                    <b><i>Course Details:</i></b> {details}
                                </Card.Text>
                                <Link to={`/checkout/${course_id}`}>
                                    <Button variant="outline-warning">
                                        Get Premium Access <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                                    </Button>
                                </Link>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">

                                <div>
                                    <FaStar className='text-warning me-2'></FaStar>
                                    <span><b><i>{ratings}</i></b></span>
                                </div>
                                <div>
                                    <b><i>Price:</i></b> <FaDollarSign></FaDollarSign> {price}
                                </div>

                            </Card.Footer>
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