import React from 'react';

const Blogs = () => {
    return (
        <div className='w-9/12 mx-auto my-20'>
            <h2 className='text-2xl'>Developer's question answer:</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box mb-4">
                <div className="collapse-title text-xl font-medium">
                    what is cors?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300  rounded-box  mb-4">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content bg-amber-200">
                    <b>Reason why I use firebase:</b>
                    <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. That's why I use firebase</p>
                    <br />
                    <b>The other options to implement the authentication:</b>
                    <p>Retina scans, voice recognition, and fingerprints etc.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300  rounded-box  mb-4">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300  rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content bg-amber-200">
                    <b>What is Node?</b>
                    <p>Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>
                    <br />
                    <b>How does Node work?</b>
                    <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. It is an event loop single-threaded language.It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept: i. <strong>Asynchronous</strong>,
                    ii. <strong>Non-blocking I/O</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;