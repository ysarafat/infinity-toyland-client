import React from 'react';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';

function Blog() {
    return (
        <div className="my-16 min-h-[calc(100vh-408px)]">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-primary-text">
                Blog
            </h1>
            <DynamicTitle title="Blog" />

            <div className="text-lg font-medium">
                <h1 className="text-2xl">
                    Q1 : What is an access token and refresh token? How do they work and where
                    should we store them on the client-side?
                </h1>
                <p className="mt-2">
                    <b>Ans:</b> <u>Access token:</u> Access token is an encrypted string typically
                    issued by an authentication server when a user successfully logs in or
                    authenticates. The access token acts as a certificate that allows the user to
                    access protected data. <br />
                    <u> Refresh Token:</u> Refresh token is an encrypted string that is usually
                    issued along with an access token during the authentication process. The refresh
                    token is used to obtain a new access token when the current access token
                    expires. <br />
                    <u>How to Work:</u> It works by following the steps below when a user requests
                    the server for login.
                    <ul className="list-disc ms-5">
                        <li>
                            The application requests an access token from the authorization server.
                        </li>
                        <li>
                            The authorization server authenticates the user and issues an access
                            token.
                        </li>
                        <li>
                            The application stores the access token in the browser's local storage ,
                            cookies or HTTP cookies.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="text-lg font-medium my-8">
                <h1 className="text-2xl">Q2 : Compare SQL and NoSQL databases?</h1>
                <div className="mt-2">
                    <b>Ans:</b> <u>SQL Database:</u>{' '}
                    <ul>
                        <li>SQL saves data in table form.</li>
                        <li>Relational database management system</li>
                        <li>Suitable for structured data with predefined schemas</li>
                        <li>Handling large amounts of data requires vertical scaling</li>
                        <li>It is less flexible</li>
                        <li>SQL DB example: MySQL, PostgreSQL</li>
                    </ul>
                    <u>NoSQL Database:</u>{' '}
                    <ul>
                        <li>NoSQL stores data in document form.</li>
                        <li>Non-relational database management system</li>
                        <li>Suitable for unstructured and semi-structured data</li>
                        <li>Horizontal scaling is possible to handle large volumes of data</li>
                        <li>It is more flexible</li>
                        <li>NoSQL DB example: MongoDB, Redis</li>
                    </ul>
                </div>
            </div>
            <div className="text-lg font-medium">
                <h1 className="text-2xl">Q3 : What is express js? What is Nest JS?</h1>
                <p className="mt-2">
                    <b>Ans:</b> <u>Express JS:</u> Express.js is a minimal and flexible web
                    application framework for Node.js. It helps to build web applications and APIs
                    quickly and efficiently. <br />
                    <u>Nest JS:</u> Nest.js is a progressive and opinionated framework for building
                    scalable and maintainable server-side applications. It is built on top of
                    Express.js and uses TypeScript as its primary programming language.
                </p>
            </div>
            <div className="text-lg font-medium mt-8">
                <h1 className="text-2xl">Q4 : What is MongoDB aggregate and how does it work?</h1>
                <p className="mt-2">
                    <b>Ans:</b> MongoDB aggregate is a feature that allows you to perform complex
                    operations on data in your MongoDB database. Aggregate operations are performed
                    using aggregation pipelines, which are made up of a sequence of stages. Each
                    stage performs an operation on the input documents, and the documents that are
                    output from a stage are passed to the next stage.
                    <u>The operators for performing aggregation operations are:-</u>{' '}
                    <ul>
                        <li>$match: Allows filtering documents based on conditon.</li>
                        <li>
                            $group: Allows documents to be grouped together based on a common value.
                        </li>
                        <li>
                            $sum: Allows to calculate the sum of a value across all documents in a
                            group.
                        </li>
                        <li>
                            $avg: Allows to calculate the average of a value across all documents in
                            a group.
                        </li>
                        <li>
                            $min: Allows to calculate the minimum value of a value in all documents
                            in a group.
                        </li>
                        <li>
                            $max: Allows to calculate the maximum value of a value in all documents
                            in a group.
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default Blog;
