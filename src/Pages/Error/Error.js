import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="justify-center mx-auto  items-center  w-1/4 min-h-screen my-20">
                <div className="card-body">
                    <h2 className="card-title">Ooooppppsss!!</h2>
                    <p>You are in wrong place.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><Link to='/'>Go Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;