import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import CourseSideBar from '../CourseSideBar/CourseSideBar';

const Courses = () => {
    const courses = useLoaderData();
    

    return (
        <div className='grid lg:grid-cols-3 gap-6 mt-9'>
            <CourseSideBar allCourseNames={courses} ></CourseSideBar>
            <CourseCards allCourseNames={courses}  ></CourseCards>
        </div>
    );
};

export default Courses;