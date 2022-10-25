import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container mt-5'>

            <h1 className='text-center mb-5'>Frequently Asked Question</h1>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <b>Q1. What is the Purpose of React Router?</b> </Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.It is a state container for the current location , or URL. It keeps track of the location and renders different Route as it changes, and it also gives you tools to update the location using Link  and the history API.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Q2. How does Context API Works?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is introduced in React 16.3. The Context API is used to share the data with multiple components, without having to pass data through props manually. The React Context API allows us to produce the global data and share it across the application.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Q3. What is useRef()?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref = myRef , React will set its .current property to the corresponding DOM node whenever that node changes. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
};

export default Blog;