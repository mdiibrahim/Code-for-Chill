import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {GrUserManager} from 'react-icons/gr'
const CourseDetails = () => {
    const data = useLoaderData();
    const {img, enroll, price, courseDetails, title, courseName } = data[0];

    return (
        <div>
            <div className="card  bg-base-300 mx-auto my-20 shadow-xl p-20 border border-gray-300 w-4/5">
                <div className='card-actions justify-between'>
                    <h1 className='md:text-4xl'>{title}</h1>
                    <button className="btn btn-primary">Download</button>
                </div>
                
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-screen rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title sm:text-7xl">{ courseName}</h2>
                    <p>{courseDetails}</p>
                    <div className="card-actions bg-slate-400 w-full rounded-xl p-4 justify-between mt-5">
                        <div>
                            <h3>Purchase: ${price}</h3>
                            <h3>Enrollment Students: <GrUserManager className='inline mr-1 ml-3' />{ enroll}</h3>
                        </div>
                        
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;