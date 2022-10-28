import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrUserManager } from 'react-icons/gr'
import jsPDF from 'jspdf';
const CourseDetails = () => {
    const data = useLoaderData();
    const {id,img, enroll, price, courseDetails, title, courseName } = data[0];
    const  downloadCoursePDF = ()=>{
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(img,'jpg',56, 50, 500, 400);
        doc.addPage();
        doc.text(60,60,title);
        doc.text(60,80,(courseDetails.slice(0,100)));
        doc.text(60,100,(courseDetails.slice(100,200)));
        doc.text(60,120,(courseDetails.slice(200,300)));
        doc.text(60,140,(courseDetails.slice(400,500)));
        doc.text(60,160,(courseDetails.slice(500,600)));
        doc.text(60,180,(courseDetails.slice(600,700)));
        doc.text(60,200,(courseDetails.slice(700,800)));
        doc.text(60,220,(courseDetails.slice(900,1000)));
        doc.text(60,240,(courseDetails.slice(1000,1100)));
        doc.text(60,260,(courseDetails.slice(1100,1200)));
        doc.text(60,280,(courseDetails.slice(1200,1300)));
        doc.text(60,300,(courseDetails.slice(1400,1500)));
        doc.save('course-details.pdf');
     }
    return (
        <div>
            <div className="card  bg-base-300 mx-auto my-20 shadow-xl p-20 border border-gray-300 w-4/5">
                <div className='card-actions md:justify-between justify-center items-center'>
                    <h1 className='md:text-4xl'>{title}</h1>
                    <button className="btn btn-primary" onClick={downloadCoursePDF}>Download</button>
                </div>
                
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-screen rounded-xl" />
                </figure>
                <div className="card-body w-full items-center text-center">
                    <h2 className="card-title sm:text-7xl">{ courseName}</h2>
                    <p className=''>{courseDetails}</p>
                    <div className="card-actions bg-slate-400  rounded-xl p-4 justify-between  mt-5 lg:w-full md:w-5/6">
                        <div>
                            <h3>Purchase: ${price}</h3>
                            <h3>Enrollment Students: <GrUserManager className='inline mr-1 ml-3' />{ enroll}</h3>
                        </div>
                        <div>
                            <button className="btn btn-outline"><Link to={`/checkout/courses/${id}`}>Wanna Access?</Link></button>
                        <button className="btn btn-outline"><Link to='/courses'>Back to the courses</Link></button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;