import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSideBar from '../CourseSideBar/CourseSideBar';

const Courses = () => {
    const allCourseNames  = useLoaderData();
    
    return (
        <div className='grid grid-cols-2'>
            <CourseSideBar allCourseNames={allCourseNames}></CourseSideBar>
        </div>
    );
};

export default Courses;