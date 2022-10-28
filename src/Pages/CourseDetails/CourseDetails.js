import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrUserManager } from 'react-icons/gr'
import jsPDF from 'jspdf';
const CourseDetails = () => {
    const data = useLoaderData();
    const {id,img, enroll, price, courseDetails, title, courseName } = data[0];
    const  downloadCoursePDF = ()=>{
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(img,56, 50, 500, 400);
        doc.addPage();
        doc.text(280,15,courseName);
        doc.text(10,40,courseDetails);
        doc.text(10,40,courseDetails);
        doc.save('course-outline.pdf');
     }
    return (
        <div>
            <div className="card  bg-base-300 mx-auto my-20 shadow-xl p-20 border border-gray-300 w-4/5">
                <div className='card-actions justify-between'>
                    <h1 className='md:text-4xl'>{title}</h1>
                    <button className="btn btn-primary" onClick={downloadCoursePDF}>Download</button>
                </div>
                
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-screen rounded-xl" />
                </figure>
                <div className="card-body w-full items-center text-center">
                    <h2 className="card-title sm:text-7xl">{ courseName}</h2>
                    <p className=''>{courseDetails}</p>
                    <div className="card-actions bg-slate-400 w-full rounded-xl p-4 justify-between mt-5">
                        <div>
                            <h3>Purchase: ${price}</h3>
                            <h3>Enrollment Students: <GrUserManager className='inline mr-1 ml-3' />{ enroll}</h3>
                        </div>
                        
                        <button className="btn btn-outline"><Link to={`/checkout/courses/${id}`}>Wanna Access?</Link></button>
                        <button className="btn btn-outline"><Link to='/courses'>Back to the courses</Link></button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;