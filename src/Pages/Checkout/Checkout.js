import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data)
    const { title, price, courseName } = data[0];
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Checkout;