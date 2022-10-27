import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


const FAQ = () => {
    return (
        <div className='container mt-5'>

            <h3 className='text-left mb-5'>Frequently Asked Questions (FAQ)</h3>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <b>Q1. Is There any Server side regarding this project?</b> </Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Yes. Server Side URL: <Link>https://distance-learning.vercel.app</Link>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Q2. Is the Site Responsive or Not?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Yes. 4.	Mobile, Tablet and Desktop Responsive.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Q3. Private Route is Applied or Not?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Yes. Private Route is Applied.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>Q3. What is the Technologies of this Project?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            <b>Server:</b>  Node.js, Express.js, Vercel
                            <b>Client:</b>  HTML, CSS, Bootstrap, React JS, React Icons, React Router Dom, Firebase

                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><b>Q3. What is the Authentication Tools used in this Project?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Firebase

                        </p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
};

export default FAQ;