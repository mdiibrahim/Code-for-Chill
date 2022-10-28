import React from 'react';

const FAQ = () => {
    return (
        <div className='w-9/12 mx-auto my-20 min-h-screen'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300  rounded-box mb-4">
                <div className="collapse-title text-xl font-medium ">
               
                Will I get a Certificate, once I complete the Course?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>Yes, you will get Certificate of Completion. Once you complete the Course, you can generate your Certificate and share it around on LinkedIn or with your Friends/Colleagues.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300   rounded-box mb-4">
                <div className="collapse-title text-xl font-medium">

Can I access the course on my Mobile Phone?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>Yes, absolutely. Our Web application is mobile friendly, and we will soon launch our Mobile application too.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300   rounded-box mb-4">
                <div className="collapse-title text-xl font-medium">

                Are the Courses Free?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>Some are FREE, some are PAID. We have both FREE and PAID courses. We also run discount offers, to provide our Courses at a cheaper price.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300   rounded-box mb-4">
                <div className="collapse-title text-xl font-medium">

                What is the Duration of Courses?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>Our courses are self-paced. Which means, you get to learn at your own pace. Once you enrol for the Course, it's upto you.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300   rounded-box mb-4">
                <div className="collapse-title text-xl font-medium">

                What if I get stuck somewhere? Or have some doubt?
                </div>
                <div className="collapse-content bg-amber-200">
                    <p>You can ask your doubts in forum. You can post your question in the Forum, and we will answer it. We have also Doubt Sessions for students who enrol in our courses.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;