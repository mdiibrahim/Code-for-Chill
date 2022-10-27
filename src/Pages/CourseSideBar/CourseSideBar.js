import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = ({allCourseNames}) => {
    return (
        <div className='p-10'>
            {
                allCourseNames.map(singleCourseName => <h5 className="link link-accent mb-2" key={singleCourseName.id}><Link>{singleCourseName.courseName}</Link></h5>)
            }
        </div>
    );
};

export default CourseSideBar;