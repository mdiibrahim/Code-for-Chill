import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data)
    const { title, price, courseName } = data[0];
    return (
        <div>
            <div className="justify-center mx-auto  items-center  w-1/4 min-h-screen my-20">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Course Name: {courseName}</p>
                    <p>Price: ${ price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><Link to='/'>Go Courses</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;