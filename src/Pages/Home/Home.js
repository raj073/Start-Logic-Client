import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/Image 1.jpg';
import Image2 from '../../assets/images/Image 2.jpg';
import Image3 from '../../assets/images/Image 3.jpg';
import Image4 from '../../assets/images/Image 4.jpg';

const Home = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Online Course</h3>
                    <p>Online Course is a program of learning that's organized according to a syllabus (usually in units) and that takes place in a virtual space.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Distance Learning</h3>
                    <p>Participation in Online Courses and Interaction With a
                        Virtual Agent</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Machine Learning</h3>
                    <p>
                        Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={Image4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Get Certified</h3>
                    <p className='text-white'>
                        Earn a career credential or prepare for a certification with Professional Certificate programs.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;