import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = ({ allCourseNames }) => {
    return (
        <div className='lg:col-span-1'>
            {
                allCourseNames.map(singleCourseName =>
                    <div className="link link-accent mb-2 " key={singleCourseName.id}>
                        <div className="card bg-zinc-500 items-center text-center mx-auto w-3/6">
                            <div className="card-body">
                                <h2 className="card-title "><Link to={`/courses/${singleCourseName.id}`}>{singleCourseName.courseName}</Link></h2>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default CourseSideBar;