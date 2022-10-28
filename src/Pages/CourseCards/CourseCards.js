import React from 'react';
import { Link } from 'react-router-dom';

const CourseCards = ({ allCourseNames }) => {
    console.log(allCourseNames)
    return (
        <div className='col-span-2 '>           
            {
                allCourseNames.map(singleCourseNames => {
                    return (
                        <div className='w-9/12 mx-auto'>
                            <div className="card mb-5 h-96 bg-base-100 shadow-xl image-full" key={singleCourseNames.id}>
                            <figure><img src={singleCourseNames.img } className='w-full h-screen' alt="programming" /></figure>
                            <div className="card-body justify-center">
                                <h2 className="card-title md:text-8xl">{singleCourseNames.courseName}</h2>
                                <div>
                                    {
                                        singleCourseNames.courseDetails.length > 200 ?
                                            <p>{singleCourseNames.courseDetails.slice(0, 200) + "....."} <Link className='link link-accent' to={`/courses/id`}> Read more </Link> </p>
                                            : <p>{singleCourseNames.courseDetails}</p>

                                }
                                
                                   </div>
                            </div>
                        </div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
};

export default CourseCards;