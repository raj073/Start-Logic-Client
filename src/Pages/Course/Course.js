import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaDollarSign } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Course = ({ courseDetails }) => {

    console.log(courseDetails);

    const { course_id, title, price, level, ratings, img_url, author, author_img_url, details } = courseDetails;

    return (
        <div>

            <Card className="mb-4 shadow">

                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle className='me-2'
                            src={author_img_url}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mt-3'>
                                {
                                    author ?
                                        author
                                        :
                                        'No Author Name'
                                }
                            </p>

                        </div>
                    </div>
                    <div>
                        <FaDollarSign className='me-1'></FaDollarSign>
                        {price}
                    </div>

                </Card.Header>

                <Card.Body>
                    <Card.Img style={{ height: '150px' }} className='mb-2 mt-2 rounded' variant="top" src={img_url} />
                    <Card.Title>Course Title: {title}</Card.Title>
                    <Card.Text>

                        {
                            details.length > 250 ?
                                <span className='text-justify'>{details.slice(0, 160) + '...'}
                                </span>
                                :
                                <>{details}</>
                        }

                    </Card.Text>
                    <Link to={`/courses/${course_id}`}>
                        <Button variant="info" size="lg">
                            Course Details
                        </Button>
                    </Link >
                </Card.Body>

            </Card>

        </div>
    );
};

export default Course;