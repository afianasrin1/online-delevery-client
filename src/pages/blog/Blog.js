import React from "react";
import useTitle from "../../hooks/Title";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://blog.devart.com/wp-content/uploads/2021/12/sql-nosql.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                SQL and NOSQL
              </a>
              <span className="text-gray-600">— 28 october 2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              difference between sql and nosql?
            </a>
            <p className="mb-2 text-gray-700">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                JWT
              </a>
              <span className="text-gray-600">— 28 september 2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              What is JWT, and how does it work?
            </a>
            <p className="mb-2 text-gray-700">
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
              standard (RFC 7519) for securely transmitting information between
              parties as JSON object. It is compact, readable and digitally
              signed using a private key/ or a public key pair by the Identity
              Provider(IdP).Apr 25, 2022
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/09/What-is-JavaScript-1.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                javascript and NodeJS
              </a>
              <span className="text-gray-600">— 28 march 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              What is the difference between javascript and NodeJS?
            </a>
            <p className="mb-2 text-gray-700">
              Javascript is a programming language that is used for writing
              scripts on the website. Javascript can only be run in the
              browsers.Javascript can run in any browser engine as like JS core
              in safari and Spidermonkey in Firefox.We can run Javascript
              outside the browser with the help of NodeJS.It is mostly used on
              the server-side.V8 is the Javascript engine inside of node.js that
              parses and runs Javascript.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                NodeJS handle multiple requests
              </a>
              <span className="text-gray-600">— 28 april 2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              How does NodeJS handle multiple requests at the same time?
            </a>
            <p className="mb-2 text-gray-700">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
