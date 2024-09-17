import useTitle from '../../hooks/useTitle';

const Blogs = () => {
  useTitle("Toys Center|Blogs")
  return (
    <div >
      <div className=' bg-slate-50 mt-14 md:mt-24 p-4 md:p-10 gap-10  md:mb-24 md:grid grid-cols-2'>
        <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
          <h3 className='text-2xl mb-4 font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side? ?</h3>
          <p className='text-gray-600'><span className='font-bold underline'>Access Token:</span><br />
            An access token is a credential that is issued to an authenticated user or application after successfully completing the authentication process. It is a string of characters that typically represents the user s identity and authorization claims. The access token is used to authorize and gain access to protected resources, such as APIs or web services. <br /><br />


            <span className='font-bold underline'>Refresh  Token:</span><br />
            A refresh token is a long-lived credential that is also issued during the authentication process, alongside the access token. While the access token is short-lived, the refresh token is designed to have a longer expiration time, ranging from days to months. <br /><br />
            <span className='font-bold'>Access tokens and refresh tokens work together in the following manner:</span> <br /> <br />
            <span className='font-bold'>Authentication:</span> The client (user or application) initiates the authentication process by providing credentials (e.g., username and password) to the authentication server. <br /><br />

            <span className='font-bold'>Token Issuance:</span> Upon successful authentication, the authentication server generates an access token and a refresh token. The access token is typically short-lived, while the refresh token has a longer expiration time.<br /><br />
            <span className='font-bold'>Accessing Protected Resources: </span>  The client includes the access token in the request to the protected resource (e.g., API). The server validates the access token to determine if the client is authorized to access the requested resource.<br /><br />
            <span className='font-bold'>Token Expiration: </span>  Access tokens have an expiration time. When the access token expires, the client can no longer use it to access protected resources.<br /><br />
          </p>
        </div>
        <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
          <h3 className='text-2xl mb-4 font-bold'>Compare SQL and NoSQL databases?</h3>
          SQL databases, also known as relational databases, offer a structured approach to data storage and retrieval. They rely on predefined schemas and use tables with rows and columns to organize data. SQL databases enforce a rigid schema, requiring upfront definition of tables and columns. They support powerful query languages like SQL, enabling complex operations on relational data. SQL databases are well-suited for applications with structured data and require strict consistency and data integrity. However, they may face challenges when it comes to scaling horizontally and accommodating dynamic schema changes. <br /><br />

          On the other hand, NoSQL databases provide a more flexible and dynamic approach to data management. They support various data models, such as key-value, document, columnar, and graph, allowing for storage of unstructured or semi-structured data. NoSQL databases are schema-less or have a flexible schema, enabling easy modification of data structures without downtime. They are designed for horizontal scalability, distributing data across multiple servers to handle large-scale applications and high volumes of data. NoSQL databases may employ different query languages or APIs depending on the data model used. While they offer flexibility and scalability, NoSQL databases may sacrifice some aspects of data consistency and transactional support provided by traditional SQL databases. The choice between SQL and NoSQL depends on the specific requirements and characteristics of the application at hand.
        </div>
        <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
          <h3 className='text-2xl mb-4 font-bold'> What is express js? What is Nest JS ?</h3>
          <p className='text-gray-600'><span className='font-bold'>Node.js:</span> <br />
            Nest.js provides a robust set of features and tools that enable developers to create scalable and enterprise-grade applications. It offers out-of-the-box support for building RESTful APIs, GraphQL APIs, and real-time applications using WebSockets. Nest.js promotes the use of decorators and TypeScript decorators to define and organize modules, controllers, services, and providers, allowing for clear separation of concerns and easy unit testing. <br />

            <span className='font-bold'>Express.js:</span> <br />

            Express.js is a lightweight and flexible web application framework built on top of Node.js. It provides a minimalistic approach to web development, allowing developers to create robust and scalable applications with ease. Express.js offers a set of modular middleware functions that can be used to handle incoming HTTP requests and perform various tasks such as parsing request bodies, handling sessions, and implementing authentication and authorization. With its simple and unopinionated design, Express.js allows developers to have fine-grained control over their application s structure and functionality. It also provides a routing system for defining endpoints and handling different HTTP methods.
          </p>
        </div>
        <div className=' mt-8 p-4 md:p-10 bg-gray-200 mb-4 rounded-lg shadow-lg '>
          <h3 className='text-2xl mb-4 font-bold'> What is MongoDB aggregate and how does it work?</h3>
          <p className='text-gray-600'>In MongoDB, the aggregate function is a versatile and robust feature that enables advanced data processing and analysis on collections of documents. It operates through a pipeline of stages, where each stage performs a specific operation on the documents. The stages are executed sequentially, with the output of one stage becoming the input for the next stage in the pipeline. <br />

            By combining different stages and utilizing MongoDB s rich set of operators, you can construct intricate aggregation pipelines that efficiently manipulate and analyze your data. The aggregate function returns a cursor, which can be iterated to access the resulting documents or further processed using additional cursor operations.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Blogs;