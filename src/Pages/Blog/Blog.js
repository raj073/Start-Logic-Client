import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container mt-5'>

            <h3 className='text-left mb-5'>Featured Blogs</h3>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <b>Q1.What is Cors?</b> </Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            <br />
                            An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Q2. Why are you using firebase? What other options do you have to implement authentication?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here). <br />
                            Authentication is used by a server when the server needs to know exactly who is accessing their information or site.Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                            <br />
                            Alternatives to Firebase Authentication:
                            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Q3. How does the private route work?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br />
                            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>Q3. What is Node? How does Node work?</b></Accordion.Header>
                    <Accordion.Body>
                        <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                        <p class="text-justify">
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. <br />
                            It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
};

export default Blog;