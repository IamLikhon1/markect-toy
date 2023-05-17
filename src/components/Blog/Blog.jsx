
const Blog = () => {
    return (
        <div className="">
            <div className="text-5xl text-center font-bold underline my-10">Answer the questions</div>
        <div className="p-10">
            <h2 className="text-3xl font-semibold bg-purple-200 p-2 mt-5">1.What is an access token and refresh token? How do they work and where should we store them on the client-side</h2>
            <h4 className="text-xl font-medium mt-3">Ans: Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks. we store them on the client-side in the local/session storage,but this is both not safe place</h4>

            <h2 className="text-3xl font-semibold bg-orange-200 p-2 mt-5">2.Compare SQL and NoSQL databases?</h2>
            <h4 className="text-xl font-medium mt-3">Ans: SQL databases are relational, and NoSQL databases are non-relational.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</h4>

            <h2 className="text-3xl font-semibold bg-lime-200 p-2 mt-5">3.What is express js? What is Nest JS?</h2>
            <h4 className="text-xl font-medium mt-3">Ans: Express is a node js web application framework that provides broad features for building web and mobile applications.NestJS is a framework for developing modern server-side applications in Node. js.</h4>

            <h2 className="text-3xl font-semibold bg-emerald-300 p-2 mt-5">4.What is MongoDB aggregate and how does it work?</h2>
            <h4 className="text-xl font-medium mt-3">Ans:  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.Use  Group values from multiple documents together.</h4>
        </div>

        </div>
    );
};

export default Blog;