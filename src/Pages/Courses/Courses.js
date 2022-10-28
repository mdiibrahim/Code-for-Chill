import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import CourseSideBar from '../CourseSideBar/CourseSideBar';

const Courses = () => {
    const allCourseNames = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-6'>
            <CourseSideBar allCourseNames={allCourseNames} ></CourseSideBar>
            <CourseCards allCourseNames={allCourseNames}  ></CourseCards>
        </div>
    );
};

export default Courses;