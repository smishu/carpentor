import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-indigo-800 font-bold mb-12 mt-5'>Our Blog</h2>
            <div className='grid grid-cols-3 gap-4'>

                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <h3 className="text-amber-900 font-bold text-xl">**How will you improve the performance of a React Application?</h3>
                        <p>-Optimizing performance in a React application.</p>


                        <ul>
                            <li>1.Keeping component state local where necessary.</li>
                            <li>2.Memoizing React components to prevent unnecessary re-renders..</li>
                            <li>3.Code-splitting in React using dynamic import()</li>
                            <li>4.Windowing or list virtualization in React.</li>
                            <li>5.Lazy loading images in React.</li>
                        </ul>



                    </div>

                </div>

                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <h3 className="text-amber-900 font-bold text-xl">**What are the different ways to manage a state in a React application?</h3>
                        <p>-There are four main types of state you need to properly manage in your React apps:</p>
                        <ul>
                            <li>1.Local state.</li>
                            <li>2.Global state.</li>
                            <li>3.Server state.</li>
                            <li>4.URL state.</li>
                        </ul>


                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <h3 className="text-amber-900 font-bold text-xl">**How does prototypical inheritance work?</h3>
                        <p>-There are four main types of state you need to properly manage in your React apps:
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>



                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <h3 className="text-amber-900 font-bold text-xl">**Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                        <p>-Inside the Example component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. It lets us update the count so we’ll name it setCount.
                        </p>



                    </div>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className="card-body">
                        <h3 className="text-amber-900 font-bold text-xl">**What is a unit test? Why should write unit tests?</h3>
                        <p>-The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>



                    </div>

                </div>






            </div>
        </div>
    );
};

export default Blog;