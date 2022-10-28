import React from 'react';
import { Link } from 'react-router-dom';

const CourseCards = ({ allCourseNames }) => {
    console.log(allCourseNames)
    return (
        <div className='lg:col-span-2 '>           
            {
                allCourseNames.map(singleCourseNames => {
                    return (
                        <div className='w-9/12 mx-auto'>
                            <div className="card mb-5 h-96 xl:h-1/2 bg-base-100  shadow-xl image-full" key={(singleCourseNames.id)+10}>
                            <figure><img src={singleCourseNames.img } className='w-full' alt="programming" /></figure>
                            <div className="card-body justify-center">
                                <h2 className="card-title md:text-8xl">{singleCourseNames.courseName}</h2>
                                <div className='md:text-base text-sm '>
                                    {
                                        singleCourseNames.courseDetails.length > 200 ?
                                            <p>{singleCourseNames.courseDetails.slice(0, 200) + "....."} <Link className='link link-accent' to={`/courses/${singleCourseNames.id}`}> Read more </Link> </p>
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